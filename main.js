import App from "./src/app.js";
import { RootRender } from "./src/utils/rootRender.js";

const rootDiv = document.getElementById("canvas");
const app = App();

RootRender(rootDiv, app);
