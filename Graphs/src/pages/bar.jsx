import barChart from "../assets/bar.png";
import barChart1 from "../assets/bar1.png";
import barChart2 from "../assets/bar2.png";
function BarCharts() {
  return (
    <div className="graph-page">
      <h1>Bar Charts</h1>

      {/* Introduction to Bar Charts */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={barChart} alt="Bar chart example" />
          </div>
          <div className="intro-text">
            <p>
              A bar chart is a graphical representation of data where
              rectangular bars of varying heights represent different
              categories. The height of each bar corresponds to the value it
              represents, making it easy to compare different categories at a
              glance.
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example">
          <h3>Education level of federal workers with job active searches in February 2024 and February 2025</h3>
          <img
            src={ barChart1 }
            alt="Bar chart showing student distribution across different class periods"
          />
          <p>
            This bar chart displays the education level of federal workers with 
            job active searches in February 2024 and February 2025.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Education level </li>
            <li> Active job searches </li>
          </ul>
          <p> The general conclusion that can be drawn from the graph
            is that federal workers with active job searches in February were more 
            likely to have college educations than those a year earlier.
          </p>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3>Essential Workers in the United States</h3>
          <img
            src={ barChart2 }
            alt="Bar chart showing monthly website visitors"
          />
          <p>
            This bar chart displays the share of essential workers 
            who are women.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Total essential workers in the Unites States </li>
            <li> Share of essential workers who are women</li>
            <li> Job category </li>
          </ul>
          <p> The general conclusion that can be drawn from this chart is that
            most essential workers are women as the share is 52%. If we look beyond 
            the share of women, we can see that the job categories with the highest share of 
            women are social workers and health care.
          </p>
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

export default BarCharts;
