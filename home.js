document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in the toggle group
        button.parentElement.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('activee');
        });
        
        // Add active class to the clicked button
        button.classList.add('activee');
        
        console.log("Mode switched to:", button.innerText);
    });
});

// Search execution example
const goBtn = document.querySelector('.go-btn');
const searchInput = document.querySelector('input');

goBtn.addEventListener('click', () => {
    if(searchInput.value) {
        alert("Searching for vibes related to: " + searchInput.value);
    }
});
 function selectOption(element) {
    // 1. Remove 'selected' class from all cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });

    // 2. Add 'selected' class to the one we clicked
    element.classList.add('selected');

    // 3. Optional: Print the choice to console
    const choice = element.querySelector('p').innerText;
    console.log("User selected mood: " + choice);
}



//question section 
function nextSection(tip) {
     
    const currentQuestion = tip.closest('.flex');
    
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('flex')) {
        currentQuestion.classList.remove('active'); 
        nextQuestion.classList.add('active');      
    } else {
        alert("go to result");
    }
}







// Create a "Flash" effect when the page loads
window.onload = () => {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = '100vw';
    flash.style.height = '100vh';
    flash.style.backgroundColor = 'white';
    flash.style.zIndex = 2000;
    flash.style.transition = 'opacity 0.8s ease';
    document.body.appendChild(flash);

    // Fade out the white flash immediately to reveal the dark UI
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 800);
    }, 50);
};





let aiClickCount = 0;

function switchMode(element) {
    // 1. Remove 'activee' from BOTH buttons to reset
    document.getElementById('ai-mode-btn').classList.remove('activee');
    document.getElementById('std-mode-btn').classList.remove('activee');
    
    // 2. Add 'activee' to the one you actually clicked
    element.classList.add('activee');
}

function handleAiDiscovery() {
    // 1. Get the AI button specifically
    const aiBtn = document.getElementById('ai-mode-btn');
    
    // 2. Check if it is the one with the 'activee' class
    if (aiBtn.classList.contains('activee')) {
        aiClickCount++;
        console.log("AI Mode Click Count: " + aiClickCount);

        if (aiClickCount >= 2) {
            // SHOW PREMIUM MODAL
            const modal = document.getElementById('premium-modal');
            if (modal) {
                modal.style.display = 'flex';
                modal.style.opacity = '1';
            }
        } else {
            // First click logic (Optional alert or search)
            alert("AI Discovery search activated!");
        }
    } else {
        // THIS IS THE STANDARD MODE
        // Because the AI button does NOT have 'activee'
        alert("Standard search: No limits applied.");
    }
}