import React, { useState } from "react";

const RenderControls = ({ videoSrc }) => {
  const [isRendering, setIsRendering] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const handleRender = () => {
    setIsRendering(true);
    setIsRendered(false);

    
    setTimeout(() => {
      setIsRendering(false);
      setIsRendered(true);
    }, 3000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoSrc; 
    link.download = "edited_video.mp4";
    link.click();
  };

  return (
    <div className="mt-10 text-center">
      <h2 className="text-xl font-semibold mb-4">Preview & Export</h2>

     
      {videoSrc && (
        <video
          src={videoSrc}
          controls
          className="w-full max-w-2xl rounded shadow-lg mb-6 mx-auto"
        />
      )}

      
      <button
        onClick={handleRender}
        disabled={isRendering}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {isRendering ? (
          <span className="flex justify-center items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Rendering...
          </span>
        ) : (
          "Render Video"
        )}
      </button>

      {isRendered && (
        <div className="mt-4">
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Download Rendered Video
          </button>
        </div>
      )}
    </div>
  );
};

export default RenderControls;
