import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link 
            to="/bar" 
            className={location.pathname === '/bar' || location.pathname === '/' ? 'active' : ''}
          >
            Bar Charts
          </Link>
          <Link 
            to="/box" 
            className={location.pathname === '/box' ? 'active' : ''}
          >
            Box Plots
          </Link>
          <Link 
            to="/circle" 
            className={location.pathname === '/circle' ? 'active' : ''}
          >
            Circle Graphs
          </Link>
          <Link 
            to="/histogram" 
            className={location.pathname === '/histogram' ? 'active' : ''}
          >
            Histograms
          </Link>
          <Link 
            to="/ogive" 
            className={location.pathname === '/ogive' ? 'active' : ''}
          >
            Ogive
          </Link>
          <Link 
            to="/pareto" 
            className={location.pathname === '/pareto' ? 'active' : ''}
          >
            Pareto Charts
          </Link>
          <Link 
            to="/time" 
            className={location.pathname === '/time' ? 'active' : ''}
          >
            Time Series Graphs
          </Link>
          <Link 
            to="/stemLeaf" 
            className={location.pathname === '/stemLeaf' ? 'active' : ''}
          >
            Stem and Leaf
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: #1a1a1a;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color:hsl(0, 100.00%, 99.80%);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .nav-links a:hover {
          background-color: #646cff;
          color: #fff;
        }

        .nav-links a.active {
          background-color: #646cff;
          color: #fff;
        }

          .nav-links {
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Nav;
