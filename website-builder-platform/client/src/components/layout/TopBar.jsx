// src/components/layout/TopBar.jsx
import React from "react";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-logo">WB</div>
        <div>
          <div className="topbar-title">Website Builder</div>
          <div className="topbar-subtitle">
            Create and edit simple websites
          </div>
        </div>
      </div>
      <div className="topbar-right">
        UI only · No backend yet · Safe to experiment
      </div>
    </header>
  );
}
