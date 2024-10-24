import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="section-text">
          <h1>Your Title Here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate justo at magna tincidunt, nec interdum eros pulvinar. Nam
            aliquam libero et metus vulputate, id interdum orci pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate justo at magna tincidunt, nec interdum eros pulvinar. Nam
            aliquam libero et metus vulputate, id interdum orci pellentesque.
            test test test test
          </p>
        </div>
        <div className="section-image">
          <img src="../../../images/india-student.png" alt="Description" />
        </div>
      </section>
    </div>
  );
};

export default Home;
