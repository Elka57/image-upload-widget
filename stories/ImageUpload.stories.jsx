import React, { useState } from "react";
import ImageUpload from "../src/ImageUpload";

export default {
  title: "Components/ImageUpload",
  component: ImageUpload,
};

export const Default = () => {
  const [image, setImage] = useState(null);
  return (
    <ImageUpload label="Загрузите фото" value={image} onChange={setImage} />
  );
};
