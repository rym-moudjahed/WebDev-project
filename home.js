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




let aiSearchCount = 0;

function handleAiDiscoveryClick() {
    aiSearchCount++;

    if (aiSearchCount >= 2) {
        // Show the premium modal on the 2nd click
        document.getElementById('premium-modal').style.display = 'flex';
    } else {
        // Perform normal AI search logic for the first time
        console.log("First AI search performed!");
        alert("AI Discovery activated! Next time you click, you'll see the Premium offer.");
    }
}

function closeModal() {
    document.getElementById('premium-modal').style.display = 'none';
}

// Attach this to your blue AI button
document.querySelector('.go-btn').addEventListener('click', handleAiDiscoveryClick);






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

// This function runs when they click the "Go" or "AI Discovery" button
function handleAiDiscovery() {
    aiClickCount++;

    if (aiClickCount >= 2) {
        // Show the modal with a nice fade-in
        const modal = document.getElementById('premium-modal');
        modal.style.display = 'flex';
        modal.style.opacity = '1';
    } else {
        console.log("Normal AI Search Mode");
    }
}

// This function runs when they click "Continue Free"
function dismissPremium() {
    // 1. Hide the modal
    const modal = document.getElementById('premium-modal');
    modal.style.display = 'none';

    // 2. Find the toggle buttons
    const aiBtn = document.querySelector('.toggle-btn:first-child'); 
    const stdBtn = document.querySelector('.toggle-btn:last-child'); 

    // 3. Switch the "active" highlight to Standard
    if (aiBtn && stdBtn) {
        aiBtn.classList.remove('active');
        stdBtn.classList.add('active');
    }

    // 4. Reset the count so they can try again later
    aiClickCount = 0;
}

// Attach the listener to your AI button
document.querySelector('.go-btn').addEventListener('click', handleAiDiscovery);
