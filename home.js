document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in the toggle group
        button.parentElement.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        button.classList.add('active');
        
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