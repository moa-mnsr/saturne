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

// First animation (top) .. this is just to test where it is
const entangledPosition = entangled.getBoundingClientRect();
console.log('entangled top:', entangledPosition.top);
console.log('entangled left:', entangledPosition.left);

// ..coupled with the bottom one that will eventually triggers its release
const wastePosition = waste.getBoundingClientRect();
console.log('waste top:', wastePosition.top);
console.log('waste right:', wastePosition.right);

// now that we can log where it is at all, we can decide on a point at which we want it to catch on the screen and get stuck there for a bit

if (entangledPosition.top <= -62 && entangled.style.position !== 'sticky') {
  console.log('entangled is caught!');
  entangled.style.position = 'sticky';
  entangled.style.top = '-62px';
  entangled.style.left = '-42px';
  entangled.style.zIndex = '5';
  entangled.style.transform = 'none';

}

//if (wastePosition.top <= 884) {
//    console.log('waste is caught!');
//   waste.style.position = 'sticky';
//   waste.style.top = '884px';
//  waste.style.right = '1192px';
//  waste.style.zIndex = '5';
//  waste.style.transform = 'translate(10vh, -52vh)';
//}
  // commenting out log so that console ist flooded for now

  // Check if a threshold was passed.
  //if ((previousScrollRatio < 0.5) && (scrollRatio >= 0.5)) {
  //  console.log("Passed 0.5");
  //}

  // Store the value for next time.
 // previousScrollRatio = scrollRatio;
  };
