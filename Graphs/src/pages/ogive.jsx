import ogive from "../assets/ogive.png";
import ogive1 from "../assets/ogive1.png";
import time2 from "../assets/time2.png";
function Ogive() {
  return (
    <div className="graph-page">
      <h1>Ogive Graphs</h1>

      {/* Introduction to circle graphs */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img src={ogive} alt="Histogram example" />
          </div>
          <div className="intro-text">
            <p>
            An "ogive graph," also known as a cumulative frequency polygon, is a type of line graph used to 
            visually represent cumulative frequencies or cumulative percentages of a dataset, helping 
            to understand the distribution and identify key values like percentiles. 
            </p>
          </div>
        </div>
      </section>

      <div className="graph-examples">
        {/* First Example  */}
        <div className="graph-example wide-example">
          <h3> Job hunting </h3>
            <img
              src={ogive1}
              alt="Ogive graph showing behavioral reaction of retweets"
            />
          
          <p>
            This ogive graph shows total emotions of the behavioral reactions for retweets.
          </p>
          <p>
            {" "}
            The data comes from Twitter.{" "}
          </p>
          <p>The variables in this chart are: </p>
          <ul>
            <li> Total emotional score. </li>
            <li>
              {" "}
              Retweets. {" "}
            </li>
          </ul>
          <p> Some general conclusions:</p>
          <ul>
            <li>
              {" "}
              Tweets that drive high emotional score are more likely to be retweeted.{" "}
            </li>
            <li>
              {" "}
              Emotion, whether positive or negative, is a strong driver of engagement.{" "}
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

export default Ogive;
