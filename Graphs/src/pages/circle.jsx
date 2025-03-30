import circle from "../assets/circle.png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
function Circle() {
  return (
    <div className="graph-page">
      <h1>Circle Charts</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={circle} alt="circle graph example" />
          </div>
          <div className="intro-text">
            <p>
              circle graph is the intersection graph of a chord diagram. That
              is, it is an undirected graph whose vertices can be associated
              with a finite system of chords of a circle such that two vertices
              are adjacent if and only if the corresponding chords cross each
              other.
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Biggest problems kids think should be solved </h3>
          <div className="image-container">
            <img
              src={circle1}
              alt="circle graph showing biggest problems kids think should be solved"
              className="circle1-image"
            />
          </div>
          <p>
            This circle graph shows the biggest problems kids think should be
            solved.
          </p>
          <p>
            {" "}
            The way in which the data was collected was by asking fourth grade
            classrooms in Spokane, Wash., Louisville, Ky., Providence, R.I. and
            San Diego, Calif. visited by the New York Times staff.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> The problems kids think should be solved </li>
            <li>
              {" "}
              The percentage of kids who think each problem should be solved{" "}
            </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              The biggest problem the kids think should be fixed is
              homelessness.{" "}
            </li>
            <li>
              {" "}
              The problem the kids think should be fixed the least is Money.{" "}
            </li>
          </ul>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3> Corn harvest progress in Nebraska </h3>
          <img
            src={circle2}
            alt="circle graph showing corn harvest progress in Nebraska"
          />
          <p>
            This box plot shows the corn harvest progress in Nebraska in the
            past couple of years.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Harvest status </li>
            <li> Time period </li>
          </ul>
          <p> General conclusions:</p>
          <ul>
            <li>
              {" "}
              The percentage of corn harvested in 2024 was higher than the
              average of 2019-2023{" "}
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

        .circle1-image {
          width: 100%;
          min-width: 2000px;
          max-width: 2400px;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          margin: 1rem 0;
          border-radius: 4px;
        }
        }
      `}</style>
    </div>
  );
}

export default Circle;
