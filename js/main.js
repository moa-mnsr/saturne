// say what the background is that you want to change later
const panels = document.querySelectorAll('.typed-panel svg');

// set buttons to listen for click
document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', function() {
    changeChannel(index+1);
});
});

// set channel initially
let channelNumber = 0;

// say what it means to change channels
function changeChannel(buttonNumber) {
  // set the divs to hide initialy
  panels.forEach(panel => {
  panel.style.display = 'none';
});

  // logic of the channel switching
  if (channelNumber === buttonNumber) {
    channelNumber = 0;
  } else {
    channelNumber = buttonNumber;
  }
    
console.log('channelNumber is:', channelNumber);

if (channelNumber !==0) {
  panels[channelNumber - 1].style.display = 'block';
}

}