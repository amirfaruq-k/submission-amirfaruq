import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from "./script/view/main.js";
import webpackLogo from './assets/images/logo.png';

document.querySelector('#imageFigure').src = webpackLogo;
document.addEventListener("DOMContentLoaded", main);