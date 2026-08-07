import "./style1.css";
import { welcome } from "./message1";
import imageFile from "./image.png";

const heading = document.createElement("h1");
heading.textContent = welcome();

const image = document.createElement("img");
image.src = imageFile;
image.width = 300;

document.body.appendChild(heading);
document.body.appendChild(image);
