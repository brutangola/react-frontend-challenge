"use client";

import React from "react";
import { ChangeEvent, useState } from "react";

export function MediaVideoPicker({content}) {
  const [preview, setPreview] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    
    if (!files || files.length === 0) {
        return;
    }
  
    const selectedFile = files[0];
    setPreview(selectedFile);
    content = selectedFile;
    console.log(content)
  }

  return (
      <input 
      onChange={onFileSelected}
      type="file"
      name="video"
      id="video"
      accept="video/*"
      required
      className="invisible" />
  );
}