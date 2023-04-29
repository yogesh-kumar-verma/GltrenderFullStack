import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const { product } = props;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const path = "http://localhost:3000/";
  return (
    <div className="col-12 col-md-4 col-lg-3  ">
      <div
        className="card"
        style={{ width: "16rem", backgroundColor: "ActiveBorder" }}
      >
        <img
          src={
            product.objectThumbnail == undefined
              ? "/default.png"
              : path + product.objectThumbnail
          }
          className="card-img-top"
          alt="..."
          style={{ minHeight: "14rem", maxHeight: "14rem" }}
          // style={{ position: "relative" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            navigate(`/singlecomponent/${product.objectPath.substr(12)}`);
          }}
        />
        {isHovered && (
          <div
            className=""
            style={{
              position: "absolute",
              fontSize: "50px",
              color: "black",
              // zIndex: "4",
              top: "30%",
              left: "43%",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <FontAwesomeIcon icon={faCirclePlay} />
          </div>
        )}
        <div className="card-body " style={{ height: "6rem" }}>
          <h5 className="card-title text-light">
            {product.objectName
              ? product.objectName.substring(0, 15) + "...."
              : null}
          </h5>
          {/* <p className="card-text text-light">
            {product.objectDesc
              ? product.objectDesc.substring(0, 15) + "...."
              : null}
          </p> */}
          <div style={{ backgroundColor: "black" }}>
            <span style={{ color: "whitesmoke" }}>
              {" "}
              <span
                style={{
                  marginLeft: "3px",
                  backgroundColor: "purple",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  // height: "1.7rem",
                  // width: "2rem",
                  padding: "2px",
                  color: "#ab9999",
                }}
              >
                {product.user.substring(0, 1)}
              </span>{" "}
              {product.user}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
