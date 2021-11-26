import React, { Component } from "react";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import Loader from "../../components/loader";

class SingleSeries extends Component {
  state = {
    show: null,
  };

  //Aquí quiero utilizar el valor del RESULTADO DE IdParams que seria el id, para poderlo pasar en el link del fetch

  componentDidMount() {
    const IdParams = () => {
      let { id } = useParams();
      return { id };
    };
    console.log(IdParams);

    fetch(`http://api.tvmaze.com/shows/${IdParams}?embed=episodes`)
      .then((response) => response.json())
      .then((json) => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);

    return (
      <div>
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
