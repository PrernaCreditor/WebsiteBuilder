import React from "react";

export default function ImagePanel({
  images,
  onUploadImages,
  onInsertImage,
  onRemoveImage,
}) {
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length) {
      onUploadImages(files);
      // reset input so same file can be selected again later
      e.target.value = "";
    }
  };

  return (
    <div className="image-panel">
      <div className="image-panel-header">
        <span className="image-panel-title">Images</span>
        <label className="image-upload-label">
          <span className="image-upload-button">Upload</span>
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {(!images || images.length === 0) ? (
        <div className="image-empty">
          <p>No images yet.</p>
          <p className="image-empty-sub">Upload PNG, JPG, etc.</p>
        </div>
      ) : (
        <div className="image-list">
          {images.map((img) => (
            <div key={img.id} className="image-card">
              <div className="image-thumb-wrapper">
                <img src={img.url} alt={img.name} className="image-thumb" />
              </div>
              <div className="image-meta">
                <div className="image-name" title={img.name}>
                  {img.name}
                </div>
                <button
                  className="btn btn-outline image-insert-btn"
                  onClick={() => onInsertImage(img.url)}
                >
                  Insert
                </button>
                {onRemoveImage && (
                  <button
                    className="btn btn-ghost image-remove-btn"
                    onClick={() => onRemoveImage(img.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
