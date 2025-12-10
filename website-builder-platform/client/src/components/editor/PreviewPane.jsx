// src/components/editor/PreviewPane.jsx
import React, { useMemo } from "react";

export default function PreviewPane({ sections }) {
  const hasSections = (sections || []).length > 0;

  const srcDoc = useMemo(() => {
    const htmlBody = (sections || []).map((s) => s.html).join("\n\n");
    const cssAll = (sections || []).map((s) => s.css).join("\n\n");

    // base page styling so full preview looks like a real site
    const baseStyles = `
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background: #020617;
        color: #e5e7eb;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
      }
      body {
        display: block;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .wb-img {
        max-width: 720px;
        margin: 1rem auto;
        display: block;
      }
      .wb-img img {
        border-radius: 12px;
        width: 100%;
        display: block;
      }
    `;

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
          ${baseStyles}
          ${cssAll}
          </style>
        </head>
        <body>
        ${htmlBody}
        </body>
      </html>
    `;
  }, [sections]);

  const handleOpenFullPreview = () => {
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
      alert("Popup blocked. Please allow popups for this site to see full preview.");
      return;
    }

    newWindow.document.open();
    newWindow.document.write(srcDoc);
    newWindow.document.close();
  };

  return (
    <div className="preview-pane">
      <div className="preview-header">
        <span className="preview-title">Live Preview</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="preview-subtitle">Rendered site</span>
          <button
            className="btn btn-outline preview-open-btn"
            onClick={handleOpenFullPreview}
          >
            Open full page
          </button>
        </div>
      </div>
      <div className="preview-body">
        {!hasSections && (
          <div
            style={{
              padding: "12px 0",
              fontSize: 13,
              color: "#9ca3af",
            }}
          >
            Add a section to see the live preview.
          </div>
        )}
        <iframe
          title="Preview"
          srcDoc={srcDoc}
          className="preview-frame"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
}
