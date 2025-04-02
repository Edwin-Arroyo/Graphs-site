import pareto from "../assets/pareto.png";
import pareto1 from "../assets/pareto1.png";
import pareto2 from "../assets/pareto2.png";
function Histogram() {
  return (
    <div className="graph-page">
      <h1>Pareto charts</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={pareto} alt="Histogram example" />
          </div>
          <div className="intro-text">
            <p>
            A Pareto chart is a type of chart that contains both bars and a line graph, 
            where individual values are represented in descending order by bars, and the 
            cumulative total is represented by the line.
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Categories of newsprint waste </h3>
          <div className="image-container">
            <img
              src={pareto1}
              alt="Pareto chart showing the categories of newsprint waste in 2020"
            />
          </div>
          <p>
            This pareto chart shows the categories of newsprint waste in the year 2020.
          </p>
          <p>
            {" "}
            The data in this pareto chart was collected from IOP Conf. 
            Series: Materials Science and Engineering 810 (2020) 012072.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> categories of newsprint waste. </li>
            <li>
              {" "}
              amount of waste in Kilograms. {" "}
            </li>
            <li>
              {" "}
              The percentage of waste coming from each category.{" "}
            </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              The category that contributed the most to newsprint waste was print waste.{" "}
            </li>
            <li>
              {" "}
              The category that contributes teh least to newsprint waste was the 'others' category.{" "}
            </li>
          </ul>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3> College athlete earnings </h3>
          <img
            src={pareto2}
            alt="Pareto chart showing the average earnings of college athletes in non-revenue sports"
          />
          <p>
            This pareto chart shows the average college athlete earnings in non-revenue sports.
          </p>
          <p>
          The data in this pareto chart comes from
          Opendorse. Data is based on N.I.L. transactions disclosed through 
          or processed by Opendorse between July 1, 2021, and June 30, 2024.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> The different non-revenue sports </li>
            <li> if the sport is a mens or women's sport </li>
            <li> the average earnings of the athletes in the sport </li>
          </ul>
          <p> General conclusions:</p>
          <ul>
            <li>
              {" "}
              Men's golf earned the most of all non-revenue sports.{" "}
            </li>
            <li>
                {" "}
                Exposure of the sport in the olympics can increase the earnings of the athletes.{" "}
            </li>
            <li>
                {" "}
                In general the more popular sports earn more.{" "}
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
