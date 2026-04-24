const display = document.getElementById("display");

function calculate() {
    const name1 = document.getElementById("person1").value.trim();
    const name2 = document.getElementById("person2").value.trim();

    if (name1 === "" || name2 === "") {
        display.value = "No one 💔";
        return;
    }

    let number = Math.floor(Math.random() * 101);

    let message = "";

    if (number <= 10) {
        message = "Even WiFi signals connect better than this 📶💀";
    } else if (number <= 20) {
        message = "This isn't love… this is a misunderstanding 😭";
    } else if (number <= 30) {
        message = "Chemistry? More like two wrong answers arguing 🤡";
    } else if (number <= 40) {
        message = "It's giving “seen at 2:00 AM, no reply” 👀";
    } else if (number <= 50) {
        message = "Not bad… but also not good 😬";
    } else if (number <= 60) {
        message = "Mid. Just… mid 😐";
    } else if (number <= 70) {
        message = "Lowkey something is there… don’t overthink it 😳";
    } else if (number <= 80) {
        message = "This could actually work… don't mess it up 😏";
    } else if (number <= 90) {
        message = "Dang, who gave y'all permission to be this cute 💘";
    } else {
        message = "Nah this is illegal levels of soulmate behavior 💍✨";
    }

    display.value = number + "% " + message;
}