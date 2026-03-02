import './App.css'
import { useState } from "react";

const SmartImage = ({ src }) => {
  // If src is null/empty → show gray placeholder with "No Image"
  // If src exists → show the image with Tailwind "object-cover"

  return (
    <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
      {src ? (
        <img
          src={src}
          alt="Loaded content"
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-gray-500">No Image</p>
      )}
    </div>
  );
};
