  var lastVisitTime = sessionStorage.getItem("lastVisitTime");
  var currentTime = new Date().getTime();
  var timeThreshold = 3000; // 3초 (원하는 시간 간격으로 조정 가능)

  // Check if last visit time is recorded
  if (lastVisitTime) {
    var timeDifference = currentTime - parseInt(lastVisitTime);

    // If time difference is less than the threshold, redirect to another blog
    if (timeDifference < timeThreshold) {
      // Redirect to another blog or website
      window.location.href = "https://kkmong.com/"; // 다른 블로그의 URL로 변경해주세요
    }
  }

  // Update last visit time
  sessionStorage.setItem("lastVisitTime", currentTime.toString());