import { syllabusAreas } from "../content/syllabus";

export function SyllabusMap() {
  return (
    <section className="lesson-band" aria-labelledby="map-heading">
      <div className="section-heading">
        <p className="eyebrow">OCR J560</p>
        <h2 id="map-heading">The map of GCSE Maths</h2>
      </div>
      <div className="topic-grid">
        {syllabusAreas.map((area) => (
          <article className="topic-tile" key={area.id}>
            <div className="topic-title-row">
              <h3>{area.title}</h3>
              <span className={`status-pill ${area.status}`}>{area.status}</span>
            </div>
            <p>{area.description}</p>
            <ul>
              {area.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
            <a className="topic-link" href={area.route}>
              {area.status === "available" ? "Open lesson" : "Planned route"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
