import { useMemo, useState } from "react";
import { examBoardOrder } from "../content/examBoards";
import type { ExamBoardId, ExamBoardMapping } from "../content/lessonSchema";

type ExamBoardOverlayProps = {
  mappings: ExamBoardMapping[];
};

export function ExamBoardOverlay({ mappings }: ExamBoardOverlayProps) {
  const [selectedBoardId, setSelectedBoardId] = useState<ExamBoardId>(mappings[0]?.boardId ?? "ocr");

  const selectedMapping = useMemo(() => {
    return mappings.find((mapping) => mapping.boardId === selectedBoardId) ?? mappings[0];
  }, [mappings, selectedBoardId]);

  const orderedMappings = useMemo(() => {
    return [...mappings].sort((a, b) => examBoardOrder.indexOf(a.boardId) - examBoardOrder.indexOf(b.boardId));
  }, [mappings]);

  if (!selectedMapping) {
    return null;
  }

  return (
    <section className="lesson-band" aria-labelledby="board-heading">
      <div className="section-heading">
        <p className="eyebrow">Exam-board overlay</p>
        <h2 id="board-heading">Choose the exam board view</h2>
      </div>
      <div className="board-selector" role="tablist" aria-label="Exam board views">
        {orderedMappings.map((mapping) => (
          <button
            aria-selected={mapping.boardId === selectedMapping.boardId}
            className={mapping.boardId === selectedMapping.boardId ? "board-tab active" : "board-tab"}
            key={mapping.boardId}
            onClick={() => setSelectedBoardId(mapping.boardId)}
            role="tab"
            type="button"
          >
            {mapping.boardName}
          </button>
        ))}
      </div>
      <div className="board-panel">
        <div>
          <p className="eyebrow">{selectedMapping.routeLabel}</p>
          <h3>{selectedMapping.qualification}</h3>
          <p>
            <strong>Specification:</strong> {selectedMapping.specification}
          </p>
          <p>
            <strong>Region:</strong> {selectedMapping.region}
          </p>
          <p>{selectedMapping.specFocus}</p>
        </div>
        <div>
          <h3>Assessment notes</h3>
          <ul>
            {selectedMapping.assessmentNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Student notes</h3>
          <ul>
            {selectedMapping.studentNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
