"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Simulate from "./Simulate"; 
const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [triggerProgress, setTriggerProgress] = useState(false);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setVideo(URL.createObjectURL(acceptedFiles[0]));
      setTriggerProgress(false); 
      setTimeout(() => setTriggerProgress(true), 50); 
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "video/mp4": [],
      "video/webm": [],
      "video/quicktime": [],
      "video/x-msvideo": [],
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-500 via-white to-purple-400">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10 drop-shadow-lg">
        The Best Video Editing Software
      </h1>

      <div
        {...getRootProps()}
        className="backdrop-blur-lg bg-white/70 z-10 rounded-2xl p-10 w-full max-w-xl text-center shadow-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300"
      >
        <input {...getInputProps()} />
        <p className="text-xl font-bold mb-2 text-gray-700">Drag & Drop Video Here</p>
        <p className="text-sm font-medium text-pink-600 mb-4">
          Or click to select. (Accepted formats: MP4, MOV, AVI, WEBM)
        </p>

        {/* Simulated Progress Bar */}
        {triggerProgress && <Simulate trigger={triggerProgress} />}
      </div>

      {video && (
        <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <video
            src={video}
            controls
            className="w-[600px] max-w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
