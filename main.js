import App from "./src/app.js";
import canvas from "./src/canvas.js";
import { RootRender } from "./src/modules/rootRender.js";

const rootDiv = document.getElementById("root");
const app = App();

RootRender(rootDiv, app);

canvas();
console.log("안녕 나야");
