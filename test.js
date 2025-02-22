import { convert } from "./index.js";

const exampleJsonCss = {
    "body": {
        "font-family": "sans-serif",
        "overflow": "hidden",
        "background-color": "#171717",
        "color": "#ffffff",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "height": "100vh",
        "width": "80%",
        "margin-left": "10%",
        "position": "relative"
    },
    "h1": {
        "font-size": "50px"
    },
    ".menu-button": {
        "background": "rgba(0, 0, 0, 0.6)",
        "border": "2px solid #00ffff",
        "border-radius": "5px",
        "padding": "0% 40%",
        "margin-top": "90%",
        "height": "40px",
        "width": "510px",
        "color": "#ffffff",
        "font-size": "20px",
        "cursor": "pointer",
        "transition": "all 0.3s ease-in-out",
        "box-shadow": "0 0 10px #00ffff",
        "text-align": "center"
    },
    ".menu-button:hover": {
        "background": "rgba(0, 0, 0, 0.6)",
        "border": "2px solid #ff00ff",
        "box-shadow": "0 0 15px #ff00ff"
    },
    "#credits": {
        "font-size": "20px",
        "color": "cyan"
    }
};

console.log(convert(exampleJsonCss));