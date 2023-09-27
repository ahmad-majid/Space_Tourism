import { useState } from "react";
import "./Technology.css";
import Data from "../Data/TechnologyData";

const Technology = () => {
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
    <div className="technology">
      {Data.map((tech, index) => {
        if (tech.id === id) {
          return (
            <div
              className="key-div"
              key={tech.name + index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="data-container">
                <div className="data-box">
                  <div className="data">
                    <h2>{tech.name}</h2>
                    <p>{tech.text}</p>
                  </div>
                  <nav>
                    <button
                      className={activeButton === 1 ? "active" : ""}
                      onClick={() => handleButtonClick(1)}
                    >
                      1
                    </button>
                    <button
                      className={activeButton === 2 ? "active" : ""}
                      onClick={() => handleButtonClick(2)}
                    >
                      2
                    </button>
                    <button
                      className={activeButton === 3 ? "active" : ""}
                      onClick={() => handleButtonClick(3)}
                    >
                      3
                    </button>
                  </nav>
                </div>
              </div>
              <picture className="tech-container">
                <source
                  srcSet={tech.image_2}
                  media="(max-width: 1023px)"
                ></source>
                <img src={tech.image} alt={tech.name} />
              </picture>
            </div>
          );
        }
        // Add a default return value when tech.id !== id
        return null;
      })}
    </div>
  );
};

export default Technology;
