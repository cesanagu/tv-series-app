import React from "react";
import { Routes, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Series />}></Route>
    <Route path="/series/:id" element={<SingleSeries />}></Route>
  </Routes>
);

export default Main;
