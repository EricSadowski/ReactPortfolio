import "./nav.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Nav = () => {

    return (

      <>

<nav className="navbar navbar-expand-md bg-main">
      <div className="container" id="real-nav">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainHeader" aria-controls="navbarMainHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMainHeader">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="#project-link">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-link">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>



        </>
    )
}

export default Nav