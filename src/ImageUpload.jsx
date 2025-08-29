// src/ImageUpload.jsx
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload = ({ label, value, onChange, required = false }) => {
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (value?.file && value.previewUrl) {
      setPreviewUrl(value.previewUrl);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Выберите изображение.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Размер файла не должен превышать 5 МБ.");
      return;
    }

    setError("");
    setUploading(true);
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    onChange?.({ file, previewUrl: preview });
    setUploading(false);
  };

  const handleDelete = () => {
    setPreviewUrl(null);
    onChange?.(null);
  };

  return (
    <Box>
      <input
        accept="image/*"
        type="file"
        hidden
        ref={inputRef}
        onChange={handleFileChange}
        aria-label="Выберите изображение"
      />

      {!previewUrl && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => inputRef.current?.click()}
          aria-label="Загрузить изображение"
        >
          {uploading ? <CircularProgress size={20} /> : "Загрузить изображение"}
        </Button>
      )}

      {previewUrl && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={() => inputRef.current?.click()}
            role="button"
            aria-label="Изменить изображение"
          >
            {label}
          </Typography>
          <Box mt={2} position="relative">
            <img
              src={previewUrl}
              alt="Превью изображения"
              style={{
                width: "150px",
                height: "100px",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
            <IconButton
              size="small"
              onClick={handleDelete}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              aria-label="Удалить изображение"
            >
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      )}

      {error && (
        <Typography variant="caption" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

ImageUpload.propTypes = {
  label: PropTypes.string,
  value: PropTypes.shape({
    file: PropTypes.instanceOf(File),
    previewUrl: PropTypes.string,
  }),
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default ImageUpload;
