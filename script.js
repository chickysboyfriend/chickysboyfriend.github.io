const valentineData = {
    7: {
        title: "Rose Day",
        quote: "A single rose can be my garden... a single friend, my world.",
        img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzh6eDN3Y3Z6eDN3Y3Z6eDN3Y3Z6eDN3Y3Z6eDN3Y3Z6eDN3Y3Z6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKoWXlo3M1nCvc4/giphy.gif",
        note: "I wanted to get you roses, but I realized you are more beautiful than any flower."
    },
    8: {
        title: "Propose Day",
        quote: "I want to be with you until the sun fails to shine.",
        img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l2JhIidH3f4x7Yuxy/giphy.gif",
        note: "Life is a journey, and I’m so glad I'm traveling it with you."
    }
    // You can add 9, 10, 11, 12, 13, 14 here following the same format
};

function showDay(dayNumber) {
    const data = valentineData[dayNumber];
    if (data) {
        document.getElementById('display-date').innerText = "February " + dayNumber + ": " + data.title;
        document.getElementById('quote').innerText = '"' + data.quote + '"';
        document.getElementById('main-image').src = data.img;
        document.getElementById('personal-note').innerText = data.note;
    }
}

function showHome() {
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('day-content').style.display = 'none';
}

function showDay(dayNumber) {
    const data = valentineData[dayNumber];
    if (data) {
        // Hide home, show day content
        document.getElementById('home-content').style.display = 'none';
        document.getElementById('day-content').style.display = 'block';

        // Update content
        document.getElementById('display-date').innerText = "February " + dayNumber + ": " + data.title;
        document.getElementById('quote').innerText = '"' + data.quote + '"';
        document.getElementById('main-image').src = data.img;
        document.getElementById('personal-note').innerText = data.note;
    }
}