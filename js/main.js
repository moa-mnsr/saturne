// make sure the channel is zero on load
let channelNumber = 0;
// say where to find the panels in the html so that that you can change their display later
const panels = document.querySelectorAll('.typed-panel');
// find the buttons in the html so you can call on them later
const buttons = document.querySelectorAll('.button-panel button');
  
// a function that makes sure only one panel is visible at a time by turning the display off just in case
function hideAllPanels() {
  panels.forEach(panel => panel.style.display = 'none');
}
// function to remove selected class from all buttons
function resetButtons() {
  buttons.forEach(button => button.classList.remove('selected'));
}
// make button appear selected
function glowButton() {
  buttons[channelNumber - 1].classList.add('selected');
}
  function showActivePanel() {
    panels[channelNumber - 1].style.display = 'block';
  }

// sets on load...
hideAllPanels();

// set buttons to listen for clicks to each
buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    changeChannel(index+1);
  });
});

// say what it means to change channels and how it relates to button numbers
function changeChannel(buttonNumber) {
  hideAllPanels();
  resetButtons();
  // logic of the channel switching
  // if channel is already set to the button's number
  // then it's on and needs to be switched off
  if (channelNumber === buttonNumber) {
    channelNumber = 0;
  // if it is any other channel or zero, it can freely change to the match the switch
  } else {
    channelNumber = buttonNumber;
    // Add selected class to the clicked button
    glowButton();
  }
    
  // this is just here for debugging
  console.log('channelNumber is:', channelNumber);


  // if the channel is showing something, program can reverse the index+1 set in changeChannel

  // and count the panels with the channelNumber minus one, and set those to show
  if (channelNumber !== 0) {
    showActivePanel();
  }
}

