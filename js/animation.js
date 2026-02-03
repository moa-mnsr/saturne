// Store the "previous" scroll ratio.
let previousScrollRatio = 0;

// Get a reference to the relevant div.
const handwritingLayerDiv = document.getElementsByClassName("handwriting-layer")[0];

// Get a reference for an individual svg
const entangled = document.getElementById("entangled");
const waste = document.getElementById("waste");


// When the user scrolls...
handwritingLayerDiv.onscroll = (event) => {
// below this point is "inside" the scroll listener, which runs every time someone scrolls

  // commenting out log so that console ist flooded for now
  // Calculate the scrolled amount between 0.0 and 1.0
 // const scrollRatio = handwritingLayerDiv.scrollTop
  //  / handwritingLayerDiv.scrollHeight;

  // commenting out log so that console ist flooded for now
  // console.log('scrollRatio:', scrollRatio);

// check where an individual svg is on the screen right now

// First animation (top) .. this is just to test
const entangledPosition = entangled.getBoundingClientRect();
console.log('entangled top:', entangledPosition.top);

// ..coupled with the bottom one that triggers its release
const wastePosition = waste.getBoundingClientRect();
console.log('waste bottom:', wastePosition.bottom);


  // commenting out log so that console ist flooded for now

  // Check if a threshold was passed.
  //if ((previousScrollRatio < 0.5) && (scrollRatio >= 0.5)) {
  //  console.log("Passed 0.5");
  //}

  // Store the value for next time.
 // previousScrollRatio = scrollRatio;
  //};
