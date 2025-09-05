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
}

function updateLog(serviceName, serviceNumber) {}
