import $ from "jquery";
import { debounce } from "./modules/debounce.js";

jQuery(function () {
	let str = `window location is ${window.location}`;
	console.log(debounce);
	console.log(str);
	console.log($("body"));
	console.log(7 ** 2);
});
