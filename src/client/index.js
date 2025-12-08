import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootNode = createRoot(document.getElementById("root"));

rootNode.render(
    <App />
)