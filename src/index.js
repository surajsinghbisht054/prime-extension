import "./style.scss";
import $ from "jquery";
import htmx from "htmx.org";

// Example: using jQuery and htmx
$(document).ready(() => {
  console.log("jQuery is ready!");
  htmx.on("htmx:load", () => {
    console.log("htmx is loaded");
  });
});
