import time from "../assets/time.png";
import time1 from "../assets/time1.png";
import time2 from "../assets/time2.png";
function Time() {
  return (
    <div className="graph-page">
      <h1>Time Series Graphs</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={time} alt="Histogram example" />
          </div>
          <div className="intro-text">
            <p>
            A time series graph, also known as a time series chart or plot, is a data visualization tool 
            that shows data points at successive intervals of time, with each point representing both a 
            time and a quantity being measured, used to identify trends and patterns. 
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Job hunting </h3>
            <img
              src={time1}
              alt="Time series graph showing job applications from federal workers at DOGE-targeted agencies"
            />
          
          <p>
            This time series graph shows the number of job applications from federal workers at DOGE-targeted agencies.
          </p>
          <p>
            {" "}
            The data in this time series graph comes from Indeed.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> All federal workers. </li>
            <li>
              {" "}
              DOGE targets. {" "}
            </li>
            <li>
              {" "}
              The percentage of job applications.{" "}
            </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              The number of application went up for all federal workers.{" "}
            </li>
            <li>
              {" "}
              The spike happened shortly after President Trump's inauguration.{" "}
            </li>
          </ul>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3> Change in population </h3>
          <img
            src={time2}
            alt="Time series graph showing the change in population in the US"
          />
          <p>
            This time series graph shows the change in population in the US.
          </p>
          <p>
          The data in this time series graph comes from
          the US Census Bureau.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> The different years </li>
            <li> the change in population </li>
            <li> category of change </li>
          </ul>
          <p> General conclusions:</p>
          <ul>
            <li>
              {" "}
              From 2011 to 2021 the change in population has been negative.{" "}
            </li>
            <li>
                {" "}
                Throughout most of the decade, natural increase was higher than immigration.{" "}
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

export default Time;
