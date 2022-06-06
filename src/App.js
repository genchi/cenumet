import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Agendamiento</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/agendaMariaJoseEscaffi">Agenda Dra. Maria José Escaffi</Link> | <Link to="/agendaCristinaOlivos">Agenda Dra. Cristina Olivos</Link>
      </nav>
    </div>
  );
}

export default App;
