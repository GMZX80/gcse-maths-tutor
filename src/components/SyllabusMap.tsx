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
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul>
              {area.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
