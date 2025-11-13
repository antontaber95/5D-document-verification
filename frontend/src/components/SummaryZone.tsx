type DocumentSummary = {
  id: string;
  name: string;       // filnamn eller titel
  createdAt: string;  // t.ex. "2025-11-13"
  summary: string;    // själva sammanfattningen
};

type SummaryListProps = {
  summaries: DocumentSummary[];
  onSelect?: (summary: DocumentSummary) => void; // valfritt, om du vill klicka
};

const SummaryList: React.FC<SummaryListProps> = ({ summaries, onSelect }) => {
  return (
    <div className="h-full overflow-y-auto rounded-xl bg-base-200 border border-base-300">
      {summaries.length === 0 && (
        <div className="p-4 text-sm text-base-content/70">
          Inga sammanfattningar ännu.
        </div>
      )}

      <ul className="divide-y divide-base-300">
        {summaries.map((doc) => (
          <li
            key={doc.id}
            className="p-4 hover:bg-base-300/40 cursor-pointer transition"
            onClick={() => onSelect?.(doc)}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold text-base-content">{doc.name}</h2>
              <span className="text-xs text-base-content/60 whitespace-nowrap">
                {doc.createdAt}
              </span>
            </div>

            <p className="mt-1 text-sm text-base-content/80">
              {doc.summary.length > 160
                ? doc.summary.slice(0, 160) + "…"
                : doc.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mockSummaries: DocumentSummary[] = [
  {
    id: "1",
    name: "Regulation_1.pdf",
    createdAt: "2025-11-13",
    summary: "Det här är en kort sammanfattning av dokument 1 ...",
  },
  {
    id: "2",
    name: "Regulation_2.pdf",
    createdAt: "2025-11-13",
    summary:
      "Det här är en lite längre sammanfattning av dokument 2 som visar hur texten trunkeras efter ett visst antal tecken ...",
  },
  {
    id: "3",
    name: "Regulation_2.pdf",
    createdAt: "2025-11-13",
    summary:
      "Det här är en lite längre sammanfattning av dokument 2 som visar hur texten trunkeras efter ett visst antal tecken ...",
  },
  {
    id: "4",
    name: "Regulation_2.pdf",
    createdAt: "2025-11-13",
    summary:
      "Det här är en lite längre sammanfattning av dokument 2 som visar hur texten trunkeras efter ett visst antal tecken ...",
  },
  {
    id: "5",
    name: "Regulation_2.pdf",
    createdAt: "2025-11-13",
    summary:
      "Det här är en lite längre sammanfattning av dokument 2 som visar hur texten trunkeras efter ett visst antal tecken ...",
  },
  // osv…
];

export default function SummaryZone() {
  return (
    <div className="flex flex-col bg-base-300 md:w-[70%] p-4 w-full h-[40vh] max-h-[40vh] md:rounded-4xl justify-start transition-transform duration-500 opacity-70 md:opacity-80 md:hover:opacity-90">
      <h1 className="text-2xl text-base-content font-bold text-center mb-2">
        Comparison summary
      </h1>

      {/* wrapper runt listan */}
      <div className="flex-1 min-h-0">
        <SummaryList
          summaries={mockSummaries}
          onSelect={(doc) => {
            console.log("Valde dokument:", doc);
          }}
        />
      </div>
    </div>
  );
}
