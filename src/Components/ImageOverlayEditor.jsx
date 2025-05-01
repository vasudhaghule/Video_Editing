"use client";
import React, { useState } from "react";
import { Rnd } from "react-rnd";

const ImageOverlayEditor = () => {
  const [image, setImage] = useState(null);
  const [styles, setStyles] = useState({
    border: true,
    opacity: 1,
    animation: false,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Image Overlay on Video</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

      <div className="flex items-center gap-4 mb-4">
        <label>
          <input
            type="checkbox"
            checked={styles.border}
            onChange={(e) => setStyles({ ...styles, border: e.target.checked })}
          />{" "}
          Border
        </label>
        <label>
          Opacity:
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={styles.opacity}
            onChange={(e) => setStyles({ ...styles, opacity: parseFloat(e.target.value) })}
            className="ml-2"
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={styles.animation}
            onChange={(e) => setStyles({ ...styles, animation: e.target.checked })}
          />{" "}
          Animation
        </label>
      </div>

      <div className="relative border border-gray-300 rounded overflow-hidden w-full max-w-2xl mx-auto">
        <video
          src="your-video.mp4"
          controls
          className="w-full h-auto block"
        />

        {image && (
          <Rnd
            default={{
              x: 100,
              y: 50,
              width: 120,
              height: 120,
            }}
            bounds="parent"
          >
            <img
              src={image}
              alt="Overlay"
              className={`w-full h-full object-contain ${
                styles.animation ? "animate-pulse" : ""
              }`}
              style={{
                opacity: styles.opacity,
                border: styles.border ? "2px solid red" : "none",
              }}
            />
          </Rnd>
        )}
      </div>
    </div>
  );
};

export default ImageOverlayEditor;
