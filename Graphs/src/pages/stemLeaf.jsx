import stl from "../assets/stl.png";
import stl1 from "../assets/stl1.png";
function StemLeaf() {
  return (
    <div className="graph-page">
      <h1>Stem and Leaf Graphs</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={stl} alt="Histogram example" />
          </div>
          <div className="intro-text">
            <p>
            A stem-and-leaf display or stem-and-leaf plot is a device for presenting quantitative 
            data in a graphical format, similar to a histogram, to assist in visualizing the shape of a distribution.
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Ages of presidents </h3>
            <img
              src={stl1}
              alt="Stem and leaf plot showing the age of presidents at the time of inauguration"
            />
          
          <p>
            This stem and leaf plot shows the ages of presidents at the time of inauguration.
          </p>
          <p>
            {" "}
            The data comes from the United States Presidential Inaugural Committee.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Age of presidents. </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              The distribution is normal.{" "}
            </li>
            <li>
              {" "}
              The range of this data is 27 years.{" "}
            </li>
            <li>
              {" "}
              The mode age is 54 years.{" "}
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
      `}</style>
    </div>
  );
}

export default StemLeaf;
