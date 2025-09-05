function heartCounting(id) {
  let heartCount = parseInt(document.getElementById("heart-count").innerText);

  heartCount += 1;
  document.getElementById("heart-count").innerText = heartCount;
}

function handleCallButton(button) {
  const card = button.closest(".card");
  const serviceName = card.querySelector(".service-name").innerText;
  const serviceNumber = card.querySelector(".service-num").innerText;
  let coins = parseInt(document.getElementById("coin-count").innerText);
  if (coins < 20) {
    alert("Not Enough Point");
    return;
  }
  coins -= 20;
  document.getElementById("coin-count").innerText = coins;
  console.log(serviceName, serviceNumber);
  alert(`${serviceName}, ${serviceNumber}`);
  const timeNow = currentTime();
  console.log(timeNow);
  updateLog(serviceName, serviceNumber, timeNow);
}

function updateLog(serviceName, serviceNumber, timeNow) {
  const logContainer = document.getElementById("logs-container");
  const logDiv = document.createElement("div");

  logDiv.innerHTML = `   <div id="log" class="rounded-lg
   bg-gray-100 flex p-3 justify-between items-center mt-3">
              <div class="">
                   <h4 class="font-bold">${serviceName}</h4>
                   <p>${serviceNumber}</p>
              </div>
              <p>${timeNow}</p>

            </div>`;
  console.log(logDiv);
  console.log(logContainer);

  logContainer.appendChild(logDiv);
}

function clearHistory() {
  document.getElementById("logs-container").innerHTML = "";
}

function currentTime() {
  let timeNow = new Date();
  const time = timeNow.toLocaleTimeString();
  return time;
}

// Function to copy number from the card

// Function to copy number from the card
function copyNumber(btn) {
  // Find parent card
  let card = btn.closest(".card");
  // Find number inside this card
  let numberEl = card.querySelector(".service-num");
  let number = numberEl.innerText.trim();

  // Create hidden textarea
  let textarea = document.createElement("textarea");
  textarea.value = number;
  document.body.appendChild(textarea);

  // Select and copy
  textarea.select();
  document.execCommand("copy"); // directly copy

  // Feedback (button text change)
  let oldText = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
  setTimeout(function () {
    btn.innerHTML = oldText;
  }, 1000);

  // Clean up
  document.body.removeChild(textarea);
}
