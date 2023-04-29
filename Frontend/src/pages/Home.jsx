import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios";
import FormModel from "../components/FormModel";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    try {
      axios.get("http://localhost:3000").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [toggle]);

  return (
    <>
      <div
        className="row d-flex flex-row-reverse"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="d-none   col-md-2   d-flex flex-column  align-items-center  justify-content-center d-md-flex mr-1"
          style={{
            height: "100vh",
            backgroundColor: "black",
            position: "fixed",
            left: "0px",
          }}
        >
          {" "}
          {/* <Link className="nav-link active text-light" to="/login ">
            Login
          </Link>
          <Link className="nav-link active text-light" to="/register">
            Register
          </Link> */}
          <span className="text-light text-center">
            Have a Good project ? <br /> Showcase your skills 😄{" "}
          </span>
          <Popup
            trigger={
              <button className="btn btn-light mt-2">Upload Project</button>
            }
            modal
            nested
            // style={{ backgroundColor: "white" }}
          >
            {(close) => (
              <>
                <FormModel close={close} setToggle={setToggle} />
              </>
            )}
          </Popup>
        </div>
        <div
          className="col-12  col-md-10  bg-dark  d-flex "
          style={{
            minHeight: "100vh",
            backgroundColor: "black",
            marginRight: "0px",
            zIndex: "1",
          }}
        >
          <div
            className="bg-dark row rounded"
            style={{
              width: "100%",
              zIndex: "2",
              marginTop: "4rem",
              marginLeft: "0.5rem",
            }}
          >
            {products
              ? products.map((product) => {
                  return <Card key={product._id} product={product} />;
                })
              : null}
          </div>

          {/* <button className="btn btn-light">Upload</button> */}
        </div>
      </div>{" "}
      <div
        className="  d-md-none p-2"
        style={{
          position: "fixed",
          // right: "2rem",
          backgroundColor: "black",
          bottom: "0rem",
          zIndex: "3",
          width: "100%",
        }}
      >
        {" "}
        <span className="text-light text-center">
          Have a Good project ? <br /> Showcase your skills 😄{" "}
        </span>
        <Popup
          trigger={<button className="btn btn-light">Upload Project</button>}
          modal
          nested
          // style={{ backgroundColor: "white" }}
        >
          {(close) => (
            <>
              <FormModel close={close} setToggle={setToggle} />
            </>
          )}
        </Popup>
      </div>
    </>
  );
}

export default Home;
