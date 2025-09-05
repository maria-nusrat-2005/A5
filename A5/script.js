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
  updateLog(serviceName, serviceNumber);
}

function updateLog(serviceName, serviceNumber) {
  const logContainer = document.getElementById("logs-container");
  const logDiv = document.createElement("div");

  logDiv.innerHTML = `   <div id="log" class="rounded-lg
   bg-gray-100 flex p-3 justify-between items-center mt-3">
              <div class="">
                   <h4 class="font-bold">${serviceName}</h4>
                   <p>${serviceNumber}</p>
              </div>
              <p>11:36:58 AM</p>

            </div>`;
  console.log(logDiv);
  console.log(logContainer);

  logContainer.appendChild(logDiv);
}

function clearHistory() {
  document.getElementById("logs-container").innerHTML = "";
}
