import React, { useState } from "react";

type RegulationFile = {
  id: string;
  name: string;
  url: string;
};

type RegulationFilesProps = {
  files: RegulationFile[];
  onSelect: (file: RegulationFile | null) => void;
};

export const RegulationFiles: React.FC<RegulationFilesProps> = ({
  files,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedId(value);

    const selectedFile = files.find((f) => f.id === value) ?? null;
    onSelect(selectedFile);
  };

  return (
    <div className="flex flex-1 flex-col gap-2 w-full items-center justify-center">
      <label className="font-semibold">Select regulation document:</label>

      <select
        className="select select-bordered"
        value={selectedId}
        onChange={handleChange}
      >
        <option value="">-- Choose a document --</option>

        {files.map((file) => (
          <option key={file.id} value={file.id}>
            {file.name}
          </option>
        ))}
      </select>
    </div>
  );
};
