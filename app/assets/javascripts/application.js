//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})


document.getElementById("showButton").addEventListener(
  "click",
  function(event) {
    if (event.target.innerHTML === "Hide") {
      event.target.innerHTML = "Show";
    } else {
      event.target.innerHTML = "Hide";
    }
  },
  false
);

document.getElementById("showButton2").addEventListener(
  "click",
  function(event) {
    if (event.target.innerHTML === "Hide") {
      event.target.innerHTML = "Show";
    } else {
      event.target.innerHTML = "Hide";
    }
  },
  false
);