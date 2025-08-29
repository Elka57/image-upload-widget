🖼️ ImageUpload Widget
A reusable React component for uploading and previewing images. Built with React, Vite, MUI, and Emotion to provide a modern, accessible, and easy-to-integrate image picker.

🚀 Table of Contents
Tech Stack
Features
Installation
Running Locally
Storybook Demo
Usage
Props
License

💻 Tech Stack
React 18
Vite
MUI (Material UI)
Emotion (@emotion/react & @emotion/styled)
Storybook

✨ Features
Preview image immediately after selection
File type validation (only images)
File size validation (max 5 MB)
Delete/reset functionality
Customizable label and styling
Accessible (ARIA) and responsive
Easy integration into any form

📦 Installation
Clone the repository and install dependencies:
bash
git clone https://github.com/yourusername/image-upload-widget.git
cd image-upload-widget
npm install
Install peer dependencies for MUI:
bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

🏃 Running Locally
To preview the component in a minimal app via Vite:
bash
npm run dev
Open your browser at: http://localhost:5173

📚 Storybook Demo
Storybook lets you interactively explore component states:
bash
npm run storybook
Open your browser at: http://localhost:6006
To build a static Storybook site:
bash
npm run build-storybook

🔧 Usage
Import the component and use it in your form:
jsx
import React, { useState } from "react";
import ImageUpload from "./src/ImageUpload";

function ProfileForm() {
  const [imageData, setImageData] = useState(null);

  return (
    <form>
      <ImageUpload
        label="Фото профиля"
        value={imageData}
        onChange={setImageData}
        required
      />
      {/* Other form fields… */}
    </form>
  );
}
value expects either null or an object:
js
{
  file: File,         // выбранный файл
  previewUrl: string, // URL.createObjectURL(file)
}

📋 Props
Prop	Type	Default	Description
label	string	""	Text label shown above the preview
value	`{ file: File, previewUrl: string } \	null`	null	Current image state
onChange	`(value: { file: File, previewUrl: string } \	null)`	noop	Called when image is selected or deleted
required	boolean	false	Adds HTML5 required validation to the input

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.