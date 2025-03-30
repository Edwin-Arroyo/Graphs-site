import box from "../assets/box.png";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
function BoxPlots() {
  return (
    <div className="graph-page">
      <h1>Box and Whisker Plots</h1>

      {/* Introduction to Box plots */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={box} alt="Box plot example" />
          </div>
          <div className="intro-text">
            <p>
            In descriptive statistics, a box plot or boxplot is a method for demonstrating graphically 
            the locality, spread and skewness groups of numerical data through their quartiles. 
            In addition to the box on a box plot, there can be lines (which are called whiskers) extending 
            from the box indicating variability outside the upper and lower quartiles, thus, 
            the plot is also called the box-and-whisker plot and the box-and-whisker diagram.
            </p>
            <p> Outliers that differ significantly from the rest of the dataset may be plotted 
                as individual points beyond the whiskers on the box-plot.
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example">
          <h3> Time visitors spend at various exhibitions </h3>
          <img
            src={ box1 }
            alt="Box plot showing visitor times"
          />
          <p>
            This box plot shows the time that visitors have spent at various museum exhibitions.
          </p>
          <p> The way in which the data was collected was by measuring the time that visitors spent at each exhibition in the museum. </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> The exhibition </li>
            <li> Time spent at the exhibition </li>
          </ul>
          <p> Some general conclusions:
          </p>
          <ul>
            <li> The median time spent at each exhibition is quite similar. </li>
            <li> The 'Families' exhibition has the highest outlier compared to all other exhibitions. </li>
            <li> People spend the least time at the 'Silent Witness' exhibition.</li>
          </ul>
        </div>

        {/* Second Example */}
        <div className="graph-example">
          <h3> Salary Distribution in HR roles in Argentina </h3>
          <img
            src={ box2 }
            alt="Box plot showing salary distribution of HR roles in Argentina"
          />
          <p>
            This box plot shows the salary distribution of HR roles in Argentina.
            who are women.
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> HR role </li>
            <li> Salary in AR$ </li>
            <li> Gender </li>
          </ul>
          <p> General conclusions:
          </p>
          <ul>
            <li> The male median salary in every role is slightly higher than that of the females with the exception of Manager</li>
            <li> The maximum salary for each role is higher for males than females with the exception of Manager</li>
            <li> The roles 'Supervisor', 'Head', and 'Manager' have the most range in salaries</li>
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

export default BoxPlots;
