const valentineData = {
    7: { 
        title: "Meri pyaari fool", 
        quote: "(gulab ka)", 
        img: "res/onam.jpeg",
        note: "Jaan.. Kaise ho re. (Theek hu ree i hear yaa saying). This is the first photo i think that we've taken ek saath. Pata tha mujhe ye time tak that one day hum dono saath honge, but itna saath, itna pyaar, CRAZY. Itna pyaar mila hain mujhe tujhse, ye kabhi socha nahi tha re life main hoga karke. Very instagram/social media thing to see this happening to me. Dhanyawad aapka cutie. I hope ye aur aur aur badhe, pure chaand tak pohoche.. And sachi kahu toh tu kinda gulab hain re, bohot pyaar and kabhi kabar chubb bhi jaate ho. Chubb jaate, chip jaate, time laga jaan ek ek karke saare kaaton se dosti karne. Tu mere & main tere kaaton se. Aur ab tak ye kaaton se dosti yaari jaari hain. I always always wish, ghanta wish, believe that we will find the softer petal wala side jisse hum ek dusre ko kaaton ko overcome karke, trust karke, in har ek situation. "

},
    8: { title: "Propose Day", quote: "Every day I choose you.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6M3ZicXN6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l2JhIidH3f4x7Yuxy/giphy.gif", note: "I don't need a special day to tell you I want you in my life forever." },
    9: { title: "Chocolate Day", quote: "Life is sweet, but you're sweeter.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/108M7gCS1JSoO4/giphy.gif", note: "Sending you some virtual sweetness today!" },
    10: { title: "Teddy Day", quote: "A hug in a box.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/4N1wOi78ZGzSB6H7vK/giphy.gif", note: "Just a reminder that I'm always here to give you a warm hug." },
    11: { title: "Promise Day", quote: "My promise: To always make you smile.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3og0IPXW3D3E90K1Xy/giphy.gif", note: "I promise to be your biggest fan and best friend." },
    12: { title: "Hug Day", quote: "The best place in the world is inside a hug.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/u9B3S2Arf_COQ/giphy.gif", note: "Imagine I'm hugging you right now." },
    13: { title: "Kiss Day", quote: "A kiss is a lovely trick designed by nature.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/lTQF061vwEBGg/giphy.gif", note: "Sending you a thousand virtual kisses." },
    14: { title: "Valentine's Day", quote: "You are my heart, my soul, my everything.", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZid3R6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6bm9oZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/26BRv0ThflsHCqfJA/giphy.gif", note: "Happy Valentine's Day! Thank you for making my life beautiful." }
};

// Movement Logic for No Button
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const card = document.getElementById('mainCard');
    
    // Boundary calculations relative to the card
    const padding = 20;
    const maxX = card.clientWidth - noBtn.offsetWidth - padding;
    const maxY = card.clientHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

function acceptProposal() {
    document.getElementById('proposal-section').style.display = 'none';
    document.getElementById('sidebar').style.display = 'flex';
    document.getElementById('home-content').style.display = 'block';
}

function showHome() {
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('day-content').style.display = 'none';
}

function showDay(num) {
    const day = valentineData[num];
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('day-content').style.display = 'block';
    
    document.getElementById('display-date').innerText = `Feb ${num}: ${day.title}`;
    document.getElementById('quote').innerText = `"${day.quote}"`;
    document.getElementById('main-image').src = day.img;
    document.getElementById('day-note-text').innerText = day.note;
}