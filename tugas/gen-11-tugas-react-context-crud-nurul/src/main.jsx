import React from "react";
import ReactDOM from "react-dom/client";
import DataForm from "./DataForm";
import DataList from "./DataList";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataForm>
    {/* <App /> */}
    <DataList />
  </DataForm>
);
