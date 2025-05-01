"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialScenes = [
  { id: "1", title: "Scene 1", start: "00:00", end: "00:05" },
  { id: "2", title: "Scene 2", start: "00:05", end: "00:10" },
  { id: "3", title: "Scene 3", start: "00:10", end: "00:15" },
];

const VideoTimeline = () => {
  const [scenes, setScenes] = useState(initialScenes);

  const handleAddScene = () => {
    const nextIndex = scenes.length + 1;
    const newScene = {
      id: Date.now().toString(),
      title: `Scene ${nextIndex}`,
      start: `00:${nextIndex * 5 - 5}`,
      end: `00:${nextIndex * 5}`,
    };
    setScenes([...scenes, newScene]);
  };

  const handleRemoveScene = () => {
    if (scenes.length > 0) {
      setScenes(scenes.slice(0, -1));
    }
  };

  const handleDeleteScene = (id) => {
    setScenes((prev) => prev.filter((scene) => scene.id !== id));
  };

  const handleTrimScene = (scene) => {
    alert(`Trimming: ${scene.title} (mock functionality)`);
  };

  const handleEditScene = (scene) => {
    alert(`Editing: ${scene.title} (mock functionality)`);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(scenes);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setScenes(reordered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Video Timeline</h2>
      <div className="flex space-x-4 mb-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          onClick={handleAddScene}
        >
          Add Scene
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
          onClick={handleRemoveScene}
        >
          Remove Last Scene
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="scenes" direction="horizontal">
          {(provided) => (
            <div
              className="flex space-x-4 overflow-x-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {scenes.map((scene, index) => (
                <Draggable key={scene.id} draggableId={scene.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-100 border rounded-xl p-4 w-44 text-center shadow hover:shadow-md"
                    >
                      <h4 className="font-semibold mb-2">{scene.title}</h4>
                      <p className="text-sm text-gray-600">
                        {scene.start} - {scene.end}
                      </p>
                      <div className="flex justify-center gap-3 mt-3 text-gray-700 text-xl">
                        <button
                          title="Trim ✂️"
                          onClick={() => handleTrimScene(scene)}
                        >
                          ✂️
                        </button>
                        <button
                          title="Delete 🗑️"
                          onClick={() => handleDeleteScene(scene.id)}
                        >
                          🗑️
                        </button>
                        <button
                          title="Edit 📝"
                          onClick={() => handleEditScene(scene)}
                        >
                          📝
                        </button>
                        <span title="Drag ☰" className="cursor-move">
                          ☰
                        </span>
                      </div>
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

export default VideoTimeline;
