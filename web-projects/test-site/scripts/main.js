let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sketch-F-0.PNG') {
        myImage.setAttribute('src', 'images/sketch-S-0.png');
    } else {
        myImage.setAttribute('src', 'images/sketch-F-0.PNG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt("あなたの名前を入力してください");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Mozilla はすばらしいよ，" + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ，' + storedName; 
}

myButton.onclick = function () {
    setUserName();
}