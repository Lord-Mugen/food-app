import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sideBarContext";
import { MealProvider } from "./context/mealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>
);
