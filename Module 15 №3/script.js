const wsUri = "wss://echo.websocket.org/";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);


// https://yandex.ru/maps/?pt=30.335429,59.944869&z=18&l=map

function pageLoaded() {
  const btn = document.getElementById("button");
  const output = document.getElementById("output");
  
  btn.addEventListener("click", getLocation);
  
  function getLocation() {
    if ("geolocation" in navigator) {
      let locationOptions = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
    } else {
      writeOutput("Ваш браузер не поддерживает функцию определения местоположения");
    }
  }
  
  function locationSuccess(data) {
    let link = `https://yandex.ru/maps/?pt=${data.coords.longitude},${data.coords.latitude}&z=18&l=map`;
    writeOutput(`<a href="${link}" target="_blank">Вы находитесь здесь</a>`);
  }
  
  function locationError() {
    writeOutput("При получении местоположения произошла ошибка");
  }
  
  function writeOutput(message) {
    output.innerHTML = `<p>${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);