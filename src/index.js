import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgendaMariaJoseEscaffi from "./routes/agendas/agendaMariaJoseEscaffi";
import AgendaCristinaOlivos from "./routes/agendas/agendaCristinaOlivos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/agendaMariaJoseEscaffi" element={<AgendaMariaJoseEscaffi />} />
      <Route path="/AgendaCristinaOlivos" element={<AgendaCristinaOlivos />} />
    </Routes>
  </BrowserRouter>
);
