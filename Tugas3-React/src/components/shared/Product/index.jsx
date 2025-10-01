import React, { useState } from "react";
import headphonesData from "../../../Utils/product.js";

export default function Product() {
  const [headphoneList, setHeadphoneList] = useState(headphonesData); // tugas yang disuruh menggunakan hooks//

  const addHeadphone = () => {
    const newItem = {
      id: headphoneList.length + 1,
      title: "The Angel White" + (headphoneList.length + 1),
      author: "Putri Nur Febrianti",
      year: 2025,
      description: "The Angel White adalah perwujudan desain minimalis dan kemurnian audio. Dirancang untuk mereka yang menghargai estetika bersih, ketenangan, dan kualitas suara yang tak tertandingi, headphone ini mengubah pengalaman mendengarkan menjadi momen meditatif.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1678066730788-fdc6d64b4679?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };
    setHeadphoneList([...headphoneList, newItem]);
    alert(" Yeayy Headphone baru berhasil ditambahkan!");  // tugas yang disuruh menggunakan hooks//
  };



   return (
    <>
      {/* Heroes Section isinya product headphones */}
      <section
        className="py-5 text-center container"
        style={{
          backgroundColor: "#282828",
          color: "#fefcfcff",
          padding: "4rem",
          margin: "3px",
          borderRadius: "10px",
        }}
      >
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" style={{ color: "#eac9c9ff" }}>
              Explore Our World of Sound
            </h1>
            <p className="lead" style={{ color: "#eac9c9ff" }}>
              Step into our product gallery. Here, every unit is a masterpiece.
              Scroll down and discover your next audio experience
            </p>
            <p>
              <a href="#" className="btn btn-danger me-2">
                VIEW COLLECTION
              </a>
              <a href="#" className="btn btn-danger me-2">
                SHOP ACCESSORIES
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Product tambahan */}
      <div className="album py-5 bg-body-tertiary">
        <div
          className="container"
          style={{
            backgroundColor: "#c96666ff",
            color: "#fefcfcff",
            padding: "3rem",
            borderRadius: "10px",
          }}
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {headphoneList.map((item) => (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="bd-placeholder-img card-img-top"
                    style={{
                      width: "100%",
                      height: "225px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>{item.title}</strong> <br />
                      <span className="text-muted">
                        {item.brand}  {item.year}
                      </span>
                      <br />
                      <br />
                      {item.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        {item.id}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button Tambah Data */}
          <div className="text-center mt-4">
            <button onClick={addHeadphone} className="btn btn-danger">
              Tambah Product Headphone
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


