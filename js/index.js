document.addEventListener('DOMContentLoaded', function() {
        var currentDateInput = document.getElementById('currentDate');
        var currentDate = new Date().toLocaleDateString();
        currentDateInput.value = currentDate;
      });
document.addEventListener('DOMContentLoaded', function() {
        var currentDateInput = document.getElementById('latestDate');
        var latestDate = new Date().toLocaleDateString();
        currentDateInput.value = latestDate;
      });
document.addEventListener('DOMContentLoaded', function() {
        var currentDateInput = document.getElementById('thirdDateBox');
        var thirdDateBox = new Date().toLocaleDateString();
        currentDateInput.value = thirdDateBox;
      });