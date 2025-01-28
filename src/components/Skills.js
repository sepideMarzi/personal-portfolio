import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cIcon from "../assets/img/c.png";
import pythonIcon from "../assets/img/python.png";
import javaIcon from "../assets/img/java.png";
import cppIcon from "../assets/img/c-.png";
import phpIcon from "../assets/img/php.png";
import htmlIcon from "../assets/img/html.png";
import reactIcon from "../assets/img/react.png";
import nodeJsIcon from "../assets/img/nodeJs.png";
import cssIcon from "../assets/img/css.png";
import swiftIcon from "../assets/img/swift.png";
import gitIcon from "../assets/img/git.png"
import sqlIcon from "../assets/img/sql-server.png"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section
      className="skill"
      id="skills"
      style={{
        backgroundColor: "#DCD9D4",
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%),
                          radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)`,
        backgroundBlendMode: "soft-light, screen",
        color: "#000",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{ color: "#000" }}>
              <h2 style={{ color: "#000" }}>Skills</h2>
              <p style={{ color: "#333" }}>
                I have a solid background in Front-End and Full-Stack
                development, specializing in crafting user-friendly interfaces.
                <br />
                Here are some of the technologies I am skilled in:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={cIcon} alt="C" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={cppIcon} alt="C++" />
                  <h5>C programming</h5>
                </div>
                <div className="item">
                  <img src={javaIcon} alt="Java" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={pythonIcon} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={phpIcon} alt="PHP" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="React" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={nodeJsIcon} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={swiftIcon} alt="Swift" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={gitIcon} alt="git" />
                  <h5>git</h5>
                </div>
                <div className="item">
                  <img src={sqlIcon} alt="icon" />
                  <h5>Sql oracle</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
