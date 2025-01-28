import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#DCD9D4",
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%),
                          radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)`,
        backgroundBlendMode: "soft-light, screen",
        padding: "20px 0",
        color: "#000",
        textAlign: "center",
        borderTop: "2px solid #000", // Line separating the footer
      }}
    >
      <Container>
        <Row>
          <Col>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Sepideh Marzi
            </h3>

            <p style={{ fontSize: "14px", marginTop: "10px", color: "#000" }}>
              © 2025 Sepideh Marzi. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
