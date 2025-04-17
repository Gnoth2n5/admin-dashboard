import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FoodDelivery } from "./screens/FoodDelivery/FoodDelivery";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FoodDelivery />
  </StrictMode>,
);
