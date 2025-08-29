import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ImageUpload from "./ImageUpload";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <ImageUpload
        label="Загруженное изображение"
        value={image}
        onChange={setImage}
        required
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
