import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PageWrapper from "./components/organisms/Page/PageWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageWrapper />
  </React.StrictMode>,
);
