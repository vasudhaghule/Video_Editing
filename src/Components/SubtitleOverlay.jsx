"use client";
import React, { useState } from "react";

const SubtitleOverlay = () => {
  const [subtitles, setSubtitles] = useState([
    {
      id: 1,
      text: "Hello world",
      start: "00:00",
      end: "00:05",
      font: "Arial",
      size: "16",
      color: "#ffffff",
      position: "bottom",
    },
  ]);

  const addSubtitle = () => {
    const newSubtitle = {
      id: Date.now(),
      text: "",
      start: "00:00",
      end: "00:05",
      font: "Arial",
      size: "16",
      color: "#ffffff",
      position: "bottom",
    };
    setSubtitles([...subtitles, newSubtitle]);
  };

  const updateSubtitle = (id, field, value) => {
    setSubtitles((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, [field]: value } : sub))
    );
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Subtitles & Text Overlay</h2>
      {subtitles.map((sub) => (
        <div key={sub.id} className="border p-4 rounded mb-4">
          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            placeholder="Subtitle Text"
            value={sub.text}
            onChange={(e) => updateSubtitle(sub.id, "text", e.target.value)}
          />
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={sub.start}
              onChange={(e) => updateSubtitle(sub.id, "start", e.target.value)}
              placeholder="Start Time"
              className="p-2 border rounded w-1/2"
            />
            <input
              type="text"
              value={sub.end}
              onChange={(e) => updateSubtitle(sub.id, "end", e.target.value)}
              placeholder="End Time"
              className="p-2 border rounded w-1/2"
            />
          </div>
          <div className="flex space-x-2 mb-2">
            <select
              value={sub.font}
              onChange={(e) => updateSubtitle(sub.id, "font", e.target.value)}
              className="p-2 border rounded w-1/3"
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Courier">Courier</option>
            </select>
            <input
              type="number"
              value={sub.size}
              onChange={(e) => updateSubtitle(sub.id, "size", e.target.value)}
              placeholder="Font Size"
              className="p-2 border rounded w-1/3"
            />
            <input
              type="color"
              value={sub.color}
              onChange={(e) => updateSubtitle(sub.id, "color", e.target.value)}
              className="p-2 border rounded w-1/3"
            />
          </div>
          <select
            value={sub.position}
            onChange={(e) => updateSubtitle(sub.id, "position", e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="top">Top</option>
            <option value="center">Center</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
      ))}
      <button
        onClick={addSubtitle}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Subtitle
      </button>
    </div>
  );
};

export default SubtitleOverlay;
