import { useMemo } from "react";
import pnLogo from "./assets/pn-logo.png";

const DATA = [
  {
    course: "Java",
    students: [
      { first: "SOUNNITH", last: "POLIN", score: 56 },
      { first: "SEMROY", last: "CHAN", score: 44 },
      { first: "NITA", last: "DEA", score: 73 },
      { first: "KADIN", last: "SIT", score: 28 }
    ]
  },
  {
    course: "HTML",
    students: [
      { first: "SOUNNITH", last: "POLIN", score: 72 },
      { first: "SEMROY", last: "CHAN", score: 39 },
      { first: "MECH", last: "HEANG", score: 91 },
      { first: "KADIN", last: "SIT", score: 25 }
    ]
  },
  {
    course: "Python",
    students: [
      { first: "SOUNNITH", last: "POLIN", score: 64 },
      { first: "SEMROY", last: "CHAN", score: 31 },
      { first: "MEY", last: "HEAT", score: 78 },
      { first: "KADIN", last: "SIT", score: 40 }
    ]
  },
  {
    course: "English",
    students: [
      { first: "SOUNNITH", last: "POLIN", score: 52 },
      { first: "MEY", last: "HEAT", score: 44 },
      { first: "NITA", last: "DEA", score: 68 },
      { first: "CHAN", last: "DEA", score: 37 }
    ]
  }
];

function Statistic({ scores }) {
  const total = scores.reduce((a, b) => a + b, 0);
  const avg = scores.length ? Math.round(total / scores.length) : 0;
  const min = scores.length ? Math.min(...scores) : 0;
  const max = scores.length ? Math.max(...scores) : 0;

  return (
    <div className="stat">
      <div>
        <div className="label">AVERAGE</div>
        <div className="val">{avg}</div>
      </div>
      <div>
        <div className="label">MIN</div>
        <div className="val">{min}</div>
      </div>
      <div>
        <div className="label">MAX</div>
        <div className="val">{max}</div>
      </div>
    </div>
  );
}

function CourseCard({ title, rows }) {
  return (
    <div className="scores">
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s, i) => (
            <tr key={i}>
              <td>{s.first}</td>
              <td>{s.last}</td>
              <td className={s.score < 50 ? "low" : ""}>{s.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Statistic scores={rows.map((r) => r.score)} />
    </div>
  );
}

function App() {
  const courses = useMemo(() => DATA, []);
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for PNC batch 2024</h1>
      </header>

      <main className="scores-container">
        {courses.map((c) => (
          <CourseCard key={c.course} title={c.course} rows={c.students} />
        ))}
      </main>
    </>
  );
}

export default App;