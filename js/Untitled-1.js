
function updateTimer() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const linkButton = document.getElementById('linkButton');

    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);

    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    }

    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        linkButton.classList.remove('hidden');
        // You can add a message or perform any action when the timer reaches 0
        console.log("Timer reached 0! Click the 'Continue' button.");
    }
}

const timerInterval = setInterval(updateTimer, 1000);

let up = document.querySelector(".up");

// Select Skills Selector
let ourSkills = document.querySelector(".our_skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".perc .percp");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

    if (window.scrollY >= 600) {
        up.style.opacity = 1;
        up.style.transform = "scale(1)";
    } else {
        up.style.transform = "scale(0)";
    }
};