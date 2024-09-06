// Set the target date and time (example: end of September 2024)
const targetDate = new Date("Sep 30, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = targetDate - now;

    // Calculate time components
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("weeks").innerHTML = ("0" + weeks).slice(-2);
    document.getElementById("days").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

    // If the countdown is over, stop the timer and show "SALE ENDED"
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "00 : 00 : 00 : 00 : 00";
        document.getElementById("grabBtn").innerText = "Sale Ended";
        document.getElementById("grabBtn").disabled = true;
    }
}, 1000);