// make sure the channel is zero and text on the panel is not visible on load
let channelNumber = 0;
// say where to find the panels in the html so that that you can change their visibility later
const panels = document.querySelectorAll('.typed-panel svg');
// find the buttons so you can call on them later
const buttons = document.querySelectorAll('button');

// set buttons to listen for clicks to each
buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    changeChannel(index+1);
});
});

// say what it means to change channels and how it relates to button numbers
function changeChannel(buttonNumber) {
  // make sure only one panel is visible at a time by turning the display off just in case
  panels.forEach(panel => {
  panel.style.display = 'none';
});

  // logic of the channel switching
  // if channel is already set to the button's number
  // then it's on and needs to be switched off
  if (channelNumber === buttonNumber) {
    channelNumber = 0;
  // if it is any other channel or zero, it can freely change to the match the switch
  } else {
    channelNumber = buttonNumber;
  }
    
// this is just here for debugging
  console.log('channelNumber is:', channelNumber);

// if the channel is showing something, program can reverse the index+1 set in changeChannel
// and count the panels with the channelNumber minus one, and set those to show
if (channelNumber !==0) {
  panels[channelNumber - 1].style.display = 'block';
}

}