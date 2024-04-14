import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ animation: "fadeIn 2s" }}>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          "Transforming the Way You Work and Learn"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
