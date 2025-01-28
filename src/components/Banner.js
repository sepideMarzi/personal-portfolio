import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bannerImage from "../assets/img/banner.png"; // Replace with the correct path

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);
  const toRotate = useMemo(() => ["I'm a Developer", "I'm a Front-End Developer", "I'm a Designer"], []);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundColor: "#DCD9D4",
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%),
                          radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)`,
        backgroundBlendMode: "soft-light, screen",
        color: "#000", // Ensure text is black
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                  {/* Display your name */}
                  <h1 style={{ fontSize: "65px", fontWeight: "bold", color: "#000" }}>
                    Hi, I'm sepideh
                  </h1>
                  {/* Rotating skills/roles */}
                  <h2 style={{ fontSize: "35px", fontWeight: "bold", color: "#333" }}>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  {/* Paragraph and button */}
                  <p style={{ color: "#000", marginTop: "20px" }}>
                    I am passionate about creating user-friendly websites and web applications.
                  </p>
                  <button
                    onClick={() => console.log("connect")}
                    style={{
                      color: "#000",
                      borderColor: "#000",
                      padding: "12px 24px",
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated " : ""}>
                  <img src={bannerImage} alt="Banner" style={{ width: "100%" }} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
