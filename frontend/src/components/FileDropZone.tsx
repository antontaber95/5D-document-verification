import React, { useRef, useState } from "react";

type FileDropZoneProps = {
  onFilesSelected: (files: FileList) => void;
  accept?: string; // optional, e.g. ".pdf,image/*"
  multiple?: boolean;
};

export const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFilesSelected,
  accept = "*/*",
  multiple = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`m-6 flex flex-1 flex-col h-full items-center justify-center border rounded-2xl p-6 cursor-pointer transition
      ${isDragging ? "border-dashed border-primary bg-base-200" : "border-base-200 bg-base-100"}`}
    >
      {/* Hidden real input */}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
      />

      {/* Visible content */}
      <span className="text-lg font-semibold">Drop files here</span>
      <span className="text-sm text-base-content/70">
        or <b>click</b> to select files
      </span>
    </div>
  );
};
