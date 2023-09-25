import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { type RouterOutputs } from "../utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const JournalCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between px-4 text-xl font-bold">
            <h1>{note.title}</h1>
            <h1>{note.createdAt.toString().slice(4, 15)}</h1>
          </div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn btn-warning btn-xs px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
