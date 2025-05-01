import React, { useState } from "react";
import VideoUpload from "./Components/VideoUpload";
import AudioManager from "./Components/AudioManager";
import TimelineEditor from "./Components/TimelineEditor";
import SubtitleOverlay from "./Components/SubtitleOverlay";
import ImageOverlayEditor from "./Components/ImageOverlayEditor";
import RenderControls from "./Components/RenderControls";

function App() {
  const [video, setVideo] = useState(""); 

  
  const handleVideoChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setVideo(URL.createObjectURL(file)); 
      
    }
  };

  return (
    <>
      <VideoUpload/>
      <TimelineEditor />
      <AudioManager />
      <SubtitleOverlay />
      <ImageOverlayEditor />

      <div className="mt-4 text-center">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="border-2 border-gray-300 p-2 rounded"
        />
      </div>

      {video && <RenderControls videoSrc={video} />}
    </>
  );
}

export default App;
