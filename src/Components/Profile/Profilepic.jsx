import React, { useState, useEffect } from "react";
import styles from "./Profilepic.module.css";

const Profilepic = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [style, setStyle] = useState({ display: "block" });

  const handleClick = () => {
    setStyle({
        display: 'none'
    })
  }
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Profile-Image
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                className={`${styles.first} d-flex justify-content-center align-items-center flex-column`}
              >
                {imageUrl && selectedImage && (
                  <div className={`${styles.box} my-5`}>
                    <img
                      className={`${styles.images} w-100 h-100`}
                      src={imageUrl}
                      alt={selectedImage.name}
                    />
                  </div>
                )}
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="btn-check"
                />
                <label
                  className="btn btn-success mt-2 mb-2"
                  htmlFor="select-image"
                  style={style}
                  onClick={handleClick}
                >
                  UPLOAD FROM GALLERY
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilepic;
