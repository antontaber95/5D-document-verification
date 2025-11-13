import { FileDropZone } from "./FileDropZone";
import { RegulationFiles } from "./RegulationFiles";

const documents = [
  { id: "1", name: "Safety Guidelines 2024.pdf", url: "/docs/safety.pdf" },
  { id: "2", name: "EU Compliance.pdf", url: "/docs/eu.pdf" },
  { id: "3", name: "Internal Rules.pdf", url: "/docs/internal.pdf" },
];

export default function CompareZone() {
  return (
    <div className="flex flex-col bg-base-300 md:w-[70%] w-full md:rounded-4xl transition-transform items-center duration-500 opacity-70 md:opacity-80 md:hover:opacity-90 p-4">
      <div className="flex flex-row w-full">
        {/* Drop zone */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl text-base-content font-bold text-center">
            Drop Zone
          </h1>
          <FileDropZone
            accept=".pdf,image/*"
            onFilesSelected={(files) => {
              // Handle files here
              // Example: just log for now
              console.log("Dropped/selected files:", files);
            }}
          />
        </div>

        {/* Vertical Line Separator */}
        <div className="w-px bg-base-100 mx-4"></div>

        {/* Compared document */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl text-base-content font-bold text-center">
            Compared document
          </h1>
          <RegulationFiles
            files={documents}
            onSelect={(file) => {
              console.log("Selected file:", file);
            }}
          />
        </div>
      </div>

      {/* Horizontal Line Separator */}
      <div className="h-px bg-base-100 my-4 w-full"></div>

      <button className="bg-base-100 hover:bg-base-200 md:w-[30%] text-base-content font-bold py-2 px-4 rounded">
        Compare
      </button>
    </div>
  );
}
