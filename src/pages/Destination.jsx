import { useState } from "react";

import "./Destination.css";

import Data from "../Data/PlanetData";

const Destination = () => {
  const [id, setId] = useState(1);

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (id) => {
    setActiveButton(id);
    setId(id);
  };

  let touchStartX = null;

  var size = Data.length;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      if (id > 1) {
        setActiveButton(id - 1);
        setId(id - 1);
      } else return;
    } else if (deltaX < -50) {
      if (id < size) {
        setActiveButton(id + 1);
        setId(id + 1);
      } else return;
    }
  };

  return (
    <div className="destination">
      {Data.map((planet, index) => {
        if (planet.id === id) {
          return (
            <div
              className="key-div"
              key={planet.name + index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="planet-container">
                <img src={planet.image} alt={planet.name} />
              </div>
              <div className="data-container">
                <div>
                  <nav>
                    <button
                      className={activeButton === 1 ? "active" : ""}
                      onClick={() => handleButtonClick(1)}
                    ></button>
                    <button
                      className={activeButton === 2 ? "active" : ""}
                      onClick={() => handleButtonClick(2)}
                    ></button>
                    <button
                      className={activeButton === 3 ? "active" : ""}
                      onClick={() => handleButtonClick(3)}
                    ></button>
                    <button
                      className={activeButton === 4 ? "active" : ""}
                      onClick={() => handleButtonClick(4)}
                    ></button>
                  </nav>
                  <h2>{planet.name}</h2>
                  <p>{planet.text}</p>
                </div>
                <hr />
                <div className="distance-container">
                  <span>{planet.distance}</span>
                  <span>{planet.time}</span>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Destination;
