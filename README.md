
# 🎬 Video Editing Interface

A simple React-based UI for a video editing workflow. This project allows users to upload a video, visualize scenes on a timeline, simulate trimming, and rearrange scenes using drag-and-drop.

##  Features

-  Upload video files (MP4, AVI, MOV, WEBM)
-  Visual Timeline with mock scene cards
-  Add/Remove scenes (mock trimming)
-  Rearrange scenes via drag-and-drop (`react-beautiful-dnd`)
-  UI buttons for trim, delete (non-functional)

---

##  Tech Stack

- React
- Tailwind CSS
- React Dropzone
- React Beautiful DnD

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vasudhaghule/Video_Editing.git
cd Video_Editing
```

### 2. Install Dependencies

Make sure you have **Node.js** installed.

```bash
npm install
```

### 3. Run the Project

```bash
npm run dev
```

---

##  Notes

- Ensure the following packages are installed:
  ```bash
  npm install react-dropzone react-beautiful-dnd
  ```

- TailwindCSS is used. If styles aren't appearing, make sure Tailwind is correctly set up in:
  - `tailwind.config.js`
  - `index.css` (should include `@tailwind base;`, `components;`, and `utilities;`)

- The project simulates trimming and editing features. No actual video processing is done.

---


