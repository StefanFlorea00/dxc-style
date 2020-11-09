document.querySelector("#chat").addEventListener("click", showChat);
document.querySelector("#chat-close").addEventListener("click", closeChat);
document.querySelector("#chat-send").addEventListener("click", function () {
  if (document.querySelector("#user-text").value != "") {
    userSendMessage(document.querySelector("#user-text").value);
    document.querySelector("#user-text").value = "";
  }
});
const template = document.querySelector("#chat-line").content;

let chatShown = false;

function sendIntroMessage() {
  botSendMessage("Hi, if you need help don't hesitate to ask!");
}

function showChat() {
  if (!chatShown) {
    document.querySelector(".chat-box").classList.remove("hidden");
    document.querySelector(".chat-bubble").classList.add("hidden");
    chatShown = true;
  }
  sendIntroMessage();
}

function closeChat() {
  if (chatShown) {
    document.querySelector(".chat-box").classList.add("hidden");
    document.querySelector(".chat-bubble").classList.remove("hidden");
    chatShown = false;
  }
}

function botSendMessage(message) {
  const line = template.cloneNode(true);
  console.log(line);
  line.querySelector("#chat-line-text").textContent = message;

  document.querySelector(".chat-text").appendChild(line);
  document.querySelector(".chat-text").scrollTop = document.querySelector(".chat-box").scrollHeight;
}

function userSendMessage(message) {
  const line = template.cloneNode(true);
  console.log(line);
  line.querySelector("#chat-line-text").textContent = message;
  line.querySelector(".chat-line").classList.add("user");

  document.querySelector(".chat-text").appendChild(line);
  document.querySelector(".chat-text").scrollTop = document.querySelector(".chat-box").scrollHeight;
}
