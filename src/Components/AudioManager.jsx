"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialSegments = [
  { id: "a1", label: "Intro Audio", muted: false },
  { id: "a2", label: "Narration", muted: false },
  { id: "a3", label: "Outro Music", muted: false },
];

const AudioManager = () => {
  const [segments, setSegments] = useState(initialSegments);
  const [bgMusic, setBgMusic] = useState("");

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = [...segments];
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setSegments(reordered);
  };

  const toggleMute = (id) => {
    setSegments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, muted: !s.muted } : s))
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Audio Management</h2>

     
      <div className="w-full h-24 bg-gray-200 rounded-md mb-6 flex items-end gap-1 px-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gray-400"
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

   
        <div className="mb-6">
        <label className="block mb-2 font-medium">Add Background Music</label>
        <input
          type="text"
          value={bgMusic}
          onChange={(e) => setBgMusic(e.target.value)}
          placeholder="Enter background music name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>

    
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="audioSegments">
          {(provided) => (
            <div
              className="space-y-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {segments.map((segment, index) => (
                <Draggable key={segment.id} draggableId={segment.id} index={index}>
                  {(provided) => (
                    <div
                      className={`flex items-center justify-between bg-white p-4 rounded-lg shadow border ${
                        segment.muted ? "opacity-50" : ""
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl cursor-move">☰</span>
                        <p className="font-medium">{segment.label}</p>
                      </div>
                      <button
                        onClick={() => toggleMute(segment.id)}
                        className="text-sm px-3 py-1 rounded bg-gray-100 border hover:bg-gray-200"
                      >
                        {segment.muted ? "Unmute" : "Mute"}
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AudioManager;
