import { useState } from "react";

import "./Crew.css";

import Data from "../Data/CrewData";

const Crew = () => {
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
    <div className="crew">
      {Data.map((crew, index) => {
        if (crew.id === id) {
          return (
            <div
              className="key-div"
              key={crew.name + index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="data-container">
                <div>
                  <h3>{crew.job}</h3>
                  <h2>{crew.name}</h2>
                  <p>{crew.text}</p>
                </div>
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
              </div>
              <div className="crew-container">
                <img src={crew.image} alt={crew.name} />
              </div>
            </div>
          );
        }
        // Add a default return value if crew.id !== id
        return null;
      })}
    </div>
  );
};

export default Crew;
