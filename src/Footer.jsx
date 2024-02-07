import React from "react";

function Footer() {
  return (
    <div
      style={{
        padding: "10px",
        fontSize: "13px",
        color: "#777",
        textAlign: "center",
      }}
    >
      Made by Radheshyam with{" "}
      <span
        style={{
          color: "red",
          marginLeft:'5px'
        }}
      >
        &#10084;
      </span>
    </div>
  );
}

export default Footer;
