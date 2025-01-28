import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import passwordManagerImg from "../assets/img/password.png";
import stockPredictorImg from "../assets/img/stock.png";
import frontEndImg1 from "../assets/img/finance.png";
import frontEndImg2 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const pythonProjects = [
    {
      title: "Password Manager",
      description: "Secure and efficient password storage",
      imgUrl: passwordManagerImg,
    },
    {
      title: "Stock Market Predictor",
      description: "AI-based stock price prediction tool",
      imgUrl: stockPredictorImg,
    },
  ];

  const frontEndProjects = [
    {
      title: "Personal Finance Dashboard",
      description: "Set budgets, and visualize financial data",
      imgUrl: frontEndImg1,
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects",
      imgUrl: frontEndImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Discover a range of my projects, encompassing Front-End Web
                    Development and Python Programming. Each one showcases my
                    skills and dedication to creating functional and innovative
                    solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="frontend">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="frontend">Front-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="python">Python</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="frontend">
                        <Row>
                          {frontEndProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="python">
                        <Row>
                          {pythonProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
