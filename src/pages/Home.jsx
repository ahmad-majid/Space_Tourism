import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <article>
        <div className="text-box">
          <p className="intro">so, you want to travel to</p>
          <h1>space</h1>
          <p className="text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </article>
      <div className="explore-container">
        <div className="explore-hover">
          <Link to="/Destination" className="explore">
            Explore
          </Link>
        </div>

      </div>
      
    </div>
  );
};

export default Home;
