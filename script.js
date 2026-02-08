document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const date = today.getDate(); // e.g., 8
    const month = today.getMonth(); // Feb is 1

    // If it's February
    if (month === 1) {
        const todayCard = document.getElementById(`day-${date}`);
        if (todayCard) {
            todayCard.style.border = "2px solid #f06292";
            todayCard.style.boxShadow = "0 0 20px #f8bbd0";
            todayCard.innerHTML += "<span> ❤️ (Today)</span>";
        }
    }
});