import 'bootstrap/dist/css/bootstrap.min.css';

const PrimaryNav = () => {
  return (
    <div>

<nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: 'crimson' }}    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown active mx-5 px-5">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <h5>About Us ▼</h5>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                id="about-us-drop"
              >
                <h4 className="ml-4">About Us</h4>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Vision Mission</a>
                <a className="dropdown-item" href="#">
                  Leadership And Administration
                </a>
                <a className="dropdown-item" href="#">Message from Chairman</a>
                <a className="dropdown-item" href="#">
                  Message from Vice Chancellor
                </a>
                <a className="dropdown-item" href="#">
                  Message from Pro Vice Chancellor
                </a>
                <a className="dropdown-item" href="#">Collaboration</a>
                <a className="dropdown-item" href="#">Awards And Achievements</a>
                <a className="dropdown-item" href="#">Permanent Campus</a>
              </div>
            </li>

            <li className="nav-item dropdown active mx-5 px-5">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <h5>Academics</h5>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <h4 className="ml-4">Academics</h4>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Schools</a>
                <a className="dropdown-item" href="#">Departments</a>
                <a className="dropdown-item" href="#">Centers And Institution</a>
                <a className="dropdown-item" href="#">Fees And Payments</a>
                <a className="dropdown-item" href="#">Policies And Procedures</a>
                <a className="dropdown-item" href="#">
                  Institutional Quality Assurance Cell (IQAC)
                </a>
              </div>
            </li>

            <li className="nav-item dropdown active mx-5 px-5">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <h5>Admissions</h5>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <h4 className="ml-4">Admissions</h4>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Why Admission at CUB?</a>
                <a className="dropdown-item" href="#">Undergraduate Admission</a>
                <a className="dropdown-item" href="#">Postgradute Admission</a>
                <a className="dropdown-item" href="#">Scholarship</a>
                <a className="dropdown-item" href="#">Credit Transfer</a>
                <a className="dropdown-item" href="#">FAQs</a>
              </div>
            </li>

            <li className="nav-item dropdown active mx-5 px-5">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <h5>News And Events</h5>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <h4 className="mx-4">News And Events</h4>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Anouncements</a>
                <a className="dropdown-item" href="#">News</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </div>
  );
};

export default PrimaryNav;