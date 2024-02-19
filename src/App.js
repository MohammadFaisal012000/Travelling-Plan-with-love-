import React, { useState } from "react";
import data from "./data";
import Tour from "./component/Tour";

const App = () => {
  let [tour, setTour] = useState(data);

  function refreshHandler() {
    setTour(data);
  }

  function removeTour(id) {
    let newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  }

  if (tour.length === 0) {
    return (
      <div className="refresh">
        <p>No Tour Left</p>
        <button className="btn-white" onClick={refreshHandler}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tour tours={tour} removeTour={removeTour}></Tour>
    </div>
  );
};

export default App;
