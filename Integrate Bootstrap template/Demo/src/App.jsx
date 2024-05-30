import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 col-xl-6">
            <h1>Hi I'm Rahul Thakor</h1>
            <h3>Web Developer at ABC Corp</h3>
            <p>June 2022 - Present</p>
            <ul>
              <li>
                <i className="fas fa-code"></i> Developed and maintained the
                company website using React and Node.js
              </li>
              <br />
              <li>
                <i className="fas fa-tachometer-alt"></i> Improved website
                performance, reducing load time by 30%
              </li>
              <br />
              <li>
                <i className="fas fa-paint-brush"></i> Collaborated with the
                design team to implement user-friendly interfaces
              </li>
              <br />
              <li>
                <i className="fas fa-mobile-alt"></i> Assisted in developing
                responsive web applications using Bootstrap
              </li>
              <br />
              <li>
                <i className="fas fa-bug"></i> Worked on bug fixing and
                improving application performance
              </li>
              <br />
              <li>
                <i className="fas fa-users"></i> Participated in team meetings
                and contributed to project planning
              </li>
              <br />
            </ul>
            <a href="#" className="btn btn-primary">
              <i className="fas fa-check-circle"></i> AVAILABLE
            </a>
            <div className="mt-2">
              <i className="fab fa-facebook fa-1x"></i>{" "}
              <i className="fab fa-twitter fa-1x"></i>{" "}
              <i className="fab fa-instagram fa-1x"></i>{" "}
              <i className="fab fa-github fa-1x"></i>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-xl-6">
            <img
              src="https://t3.ftcdn.net/jpg/07/00/14/70/360_F_700147074_pu2KBdgZHowhJlv0P72dnnPl7qj1jXKL.jpg"
              alt="Profile"
              height={450}
              width={600}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
