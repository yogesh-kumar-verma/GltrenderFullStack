import axios from "axios";
import React, { useState } from "react";
import Popup from "reactjs-popup";

function FormModel(props) {
  const { close } = props;
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
  const addModel = (e) => {
    e.preventDefault();
    console.log(name, desc, thumbnail, file, "yaha par read ho rha hia");
    if (file == null) {
      return;
    }
    const extension = file.name.split(".").pop();
    // if(file.)
    console.log(extension);
    if (thumbnail != null && thumbnail != undefined) {
      if (
        thumbnail.type != "image/jpeg" &&
        thumbnail.type != "image/png" &&
        thumbnail.type != "image/jpg"
      ) {
        alert("Invalid image type");
        return;
      }
    }
    if (extension != "glb" && extension != "gltf" && extension != "fbx") {
      console.log("file type", file.type);
      alert("Invalid File type");
      return;
    }
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: name,
        desc: desc,
      })
    );
    formData.append("file", file);
    formData.append("thumbnail", thumbnail);
    axios
      .post("http://localhost:3000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // setAlert(true),
        //   setTimeout(() => {
        //     setAlert(false);
        setDesc("");
        setFile(null);
        setName("");
        setThumbnail(null);
        //   }, 1000);
        props.setToggle((prevState) => !prevState);
      });

    return;
  };
  return (
    <>
      <form onSubmit={addModel}>
        <div className="row mb-3 bg-dark p-3" style={{}}>
          <div className="col-md-6">
            <label className="form-label text-light">Name Of Project</label>
            <input
              type="text"
              className="form-control"
              id=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputCity" className="form-label text-light">
              Description of Project
            </label>
            <input
              type="text"
              value={desc}
              className="form-control"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 m-1">
            <label htmlFor="file" className="text-light">
              Upload A 3D project(glb/gltf/fdx){" "}
              <span className="text-danger">*</span> &nbsp; &nbsp;&nbsp;
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept=".glb"
              // accept="image/png, image/jpeg"
              required
              // ref={fileRef}

              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-6 m-1">
            <label htmlFor="thumbnail" className="text-light">
              Upload Thumbnail{" "}
              <span className="text-danger">
                *if you don't put the image default thumbnail will be used
              </span>{" "}
              &nbsp; &nbsp;&nbsp;{" "}
            </label>
            <input
              type="file"
              name="thumbnail"
              id="file2"
              accept="image/png, image/jpeg"
              // required
              // ref={fileRef}

              onChange={(e) => {
                setThumbnail(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          // disabled={file == null ? "false" : "true"}
          onClick={() => {
            if (file != null && name != null && name.trim().length > 0) {
              console.log("state men", file != null && name != null);
              setTimeout(() => {
                close();
              }, 1000);
            }
          }}
          className="btn btn-info"
        >
          Submit
        </button>
        <button
          className="btn btn-info mx-3 text-right "
          onClick={() => close()}
        >
          Close
        </button>{" "}
      </form>
    </>
  );
}

export default FormModel;
