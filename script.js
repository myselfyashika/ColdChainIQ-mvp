let temperature = 5;

function updateUI() {
  document.getElementById("temp").innerText = temperature + "°C";

  let status = document.getElementById("status");
  let prediction = document.getElementById("prediction");

  if (temperature <= 8) {
    status.innerText = "🟢 Safe";
    status.className = "safe";
    prediction.innerText = "Stable";
  } 
  else if (temperature > 8 && temperature <= 12) {
    status.innerText = "🟡 Warning";
    status.className = "warning";
    prediction.innerText = "Risk in 20 minutes ⚠️";
  } 
  else {
    status.innerText = "🔴 Critical";
    status.className = "critical";
    prediction.innerText = "Unsafe! Take action 🚨";
  }
}

function simulate() {
  temperature += 3;
  updateUI();
}

// initial load
updateUI();