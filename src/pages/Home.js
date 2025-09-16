import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MUNE, SERVICES, SUPPORT } from "../data/servcie";

const Home = () => {
  const menu = MUNE;
  const support = SUPPORT;
  const Services = SERVICES;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 20px",
          background: "lightgray",
        }}
        id="header"
      >
        <img src="./logo192.png" style={{ height: "70px" }} />
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          {menu.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "20px",
          padding: "10px 50px",
        }}
      >
        {support.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <h2 style={{ color: "blue", fontSize: "40px", marginBottom: 0 }}>
              {item.heading}
            </h2>
            <p style={{ marginTop: 0, textTransform: "capitalize" }}>
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "20px",
          padding: "10px 50px",
        }}
      >
        {Services.map((item, index) => (
          <div
            key={index}
            style={{
              boxShadow: "2px 2px 10px gray",
              borderRadius: "15px",
              padding: "3em 15px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  background: item.colour,
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "40px",
                }}
              >
                {item.icon}
              </span>
            </div>
            <h2>{item.heading}</h2>
            <p>{item.content}</p>
            <a
              href={item.link}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              learn More <FaArrowRight />{" "}
            </a>
          </div>
        ))}
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Home;
