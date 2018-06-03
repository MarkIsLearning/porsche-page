var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/porsche.jpg') {
      myImage.setAttribute ('src','images/porsche2.jpg');
    } else {
      myImage.setAttribute ('src','images/porsche.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  var iLoc = myHeading.textContent.search(',');
  if(iLoc===-1){
    myHeading.textContent = myHeading.textContent + ', ' + myName;
  } else {
    myHeading.textContent = myHeading.textContent.substr(0,iLoc+2) + myName;
  }

}

if(!localStorage.getItem('name')) {
  setUserName();
}

myButton.onclick = function() {
  setUserName();
}
