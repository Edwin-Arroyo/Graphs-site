import Histo from "../assets/Histo.png";
import Histo1 from "../assets/Histo1.png";
import Histo2 from "../assets/Histo2.png";
function Histogram() {
  return (
    <div className="graph-page">
      <h1>Histograms</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={Histo} alt="Histogram example" />
          </div>
          <div className="intro-text">
            <p>
            A histogram is a graph that shows the frequency of numerical data using rectangles. 
            The height of a rectangle is the vertical axis. It represents the distribution frequency of a 
            variable such as the amount or how often that variable appears. The width of the rectangle is the horizontal axis
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Age of first time mothers in 2016 </h3>
          <div className="image-container">
            <img
              src={Histo1}
              alt="Histogram showing the age of first time mothers in 2016"
            />
          </div>
          <p>
            This histogram shown the age of first time mother in the year 2016.
          </p>
          <p>
            {" "}
            The data in this histogram comes from data from the National Center for Health Statistics.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> The ages of the first time mothers </li>
            <li>
              {" "}
              The percentage of first time mothers at a given age{" "}
            </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              The histogram is slightly right skewed.{" "}
            </li>
            <li>
              {" "}
              The peak of the distribution is around the early 20s.{" "}
            </li>
            <li> {" "}
                The right skew means that there are less older first time mothers than younger ones.
                {" "}
            </li>
          </ul>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3> Summer temperatures </h3>
          <img
            src={Histo2}
            alt="Histogram showing summer temperatures"
          />
          <p>
            This histogram shows the summer temperatures between the years 2013-2023.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Temperature </li>
            <li> Frequency of the ind of temperature </li>
          </ul>
          <p> General conclusions:</p>
          <ul>
            <li>
              {" "}
              The histogram is left skewed.{" "}
            </li>
            <li>
                {" "}
                Extremely hot temperatures were much more frequent than extremely cold temperatures.{" "}
            </li>
            <li>
                {" "}
                Hot temperatures are the most frequent in the summer.{" "}
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .graph-page {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .intro {
          margin-bottom: 3rem;
        }

        .intro-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .intro-image {
          flex: 0 0 40%;
        }

        .intro-image img {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 4px;
        }

        .intro-text {
          flex: 1;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .graph-examples {
          display: grid;
          gap: 3rem;
        }

        .graph-example {
          text-align: left;
          padding: 2rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .graph-example img {
          width: 100%;
          max-width: 800px;
          margin: 1rem 0;
          border-radius: 4px;
        }

        .graph-example p {
          line-height: 1.6;
        }

        .wide-example {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        }
      `}</style>
    </div>
  );
}

export default Histogram;
