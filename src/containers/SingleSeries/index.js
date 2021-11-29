import React, { Component } from "react";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import Loader from "../../components/loader";

function idParams() {
  let { Id } = useParams();
  console.log(Id);
  return <div>your expected id : {Id}</div>;
}

class SingleSeries extends Component {
  state = {
    show: null,
  };

  //Aquí quiero utilizar el valor del RESULTADO DE IdParams que seria el id, para poderlo pasar en el link del fetch

  componentDidMount() {
    // fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        <idParams />
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
