document.getElementById('calculateBtn').addEventListener('click', calculateRealGoodTime);




function calculateRealGoodTime() {
  const todayVal = document.getElementById('today').value;
  const releaseVal = document.getElementById('release').value;
  const goodBehaviorDaysVal = document.getElementById('goodBehaviorDays').value;
  const result = document.getElementById('result');
  
  const goodBehaviorDays = parseInt(goodBehaviorDaysVal, 10);
  if (isNaN(goodBehaviorDays) || goodBehaviorDays <= 0) {
    result.textContent = "Please enter a valid number for Good Behavior Days.";
    return;
  }
}