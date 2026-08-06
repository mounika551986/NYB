import "./style.css";
import { welcome } from "./message";
import logo from "./logo.png";

const heading = document.createElement("h1");
heading.textContent = welcome();

const image = document.createElement("img");
image.src = logo;

document.body.appendChild(heading);
document.body.appendChild(image);
