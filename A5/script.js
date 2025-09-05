function heartCounting(id) {
  let heartCount = parseInt(document.getElementById("heart-count").innerText);

  heartCount += 1;
  document.getElementById("heart-count").innerText = heartCount;
}
