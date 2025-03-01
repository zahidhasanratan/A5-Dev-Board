const cards = [1, 2, 3, 4, 5, 6];
cards.forEach((cardNumber) => {
  const card = document.querySelector(`#card${cardNumber}`);
  if (card) {
    const button = card.querySelector("#completeBtn");
    const taskNumElement = document.querySelector("#taskNum");
    const mainCount = document.querySelector("#mainCount");
    const titleElement = card.querySelector("h2");
    button.addEventListener("click", function () {
      alert("Board updated successfully");
      button.disabled = true;
      button.style.backgroundColor = "#B0C4DE";
      button.style.color = "#A9A9A9";
      button.style.fontWeight = "normal";
      let currentTaskNum = parseInt(taskNumElement.innerText);
      taskNumElement.innerText = currentTaskNum - 1;
      let currentMainCount = parseInt(mainCount.innerText);
      mainCount.innerText = currentMainCount + 1;
      addCompletionMessage(titleElement);
      checkAllTasksCompleted();
    });
  }
});
function checkAllTasksCompleted() {
  const taskNumElement = document.querySelector("#taskNum");
  let currentTaskNum = parseInt(taskNumElement.innerText);
  if (currentTaskNum === 0) {
    alert("Congrats!!! You have completed all the current tasks");
  }
}
function addCompletionMessage(titleElement) {
  const taskTitle = titleElement ? titleElement.innerText : "Unknown Task";
  const currentTime = new Date().toLocaleTimeString();
  const completionMessage = document.createElement("div");
  completionMessage.classList.add(
    "bg-[#F4F7FF]",
    "text-gray-700",
    "text-sm",
    "p-3",
    "rounded-md",
    "mb-4"
  );
  completionMessage.innerText = `You have Completed The Task ${taskTitle} at ${currentTime}`;
  const messageContainer = document.querySelector(
    "#completionMessagesContainer"
  );
  messageContainer.appendChild(completionMessage);
}

// History Clear Function

const clearHistoryButton = document.querySelector("#clearHistoryBtn");
const completionMessagesContainer = document.querySelector(
  "#completionMessagesContainer"
);

clearHistoryButton.addEventListener("click", function () {
  completionMessagesContainer.innerHTML = "";
});

// Bg color change

document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("themeButton");
  const body = document.getElementById("mainBody");

  themeButton.addEventListener("click", function () {
    const colors = [
      "#F4F7FF",
      "#FFD700",
      "#FF6347",
      "#90EE90",
      "#ADD8E6",
      "#DDA0DD",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });
});
