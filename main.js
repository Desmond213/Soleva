const toggle = document.querySelector('.menvswomen');
const menBtn = document.querySelector('.men');
const womenBtn = document.querySelector('.women');

const menProducts = document.getElementById('menproduct');
const womenProducts = document.getElementById('womenproduct');
const menHero = document.getElementById('menhero');
const womenHero = document.getElementById('womenhero');

// Function to show MEN
function showMen() {
    // Toggle UI slider
    toggle.classList.remove('women-active');

    // Products
    menProducts.style.display = 'grid';
    womenProducts.style.display = 'none';

    // Hero
    menHero.style.display = 'block';
    womenHero.style.display = 'none';

    // Save state
    localStorage.setItem('selectedCategory', 'men');
}

// Function to show WOMEN
function showWomen() {
   
    toggle.classList.add('women-active');

    // Products
    menProducts.style.display = 'none';
    womenProducts.style.display = 'grid';

    // Hero
    menHero.style.display = 'none';
    womenHero.style.display = 'block';

    // Save state
    localStorage.setItem('selectedCategory', 'women');
}

// Event listeners
menBtn.addEventListener('click', showMen);
womenBtn.addEventListener('click', showWomen);

// Load saved state
const savedCategory = localStorage.getItem('selectedCategory');
if (savedCategory === 'women') {
    showWomen();
} else {
    showMen();
}


// for the navbar
const hamburger = document.querySelector('.hamburgermenu');
    const navlist = document.querySelector('.navlist');

    hamburger.addEventListener('click', () => {
        navlist.classList.toggle('active');
  });


document.addEventListener("DOMContentLoaded", function() {

    // Get the signup form
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent default form submission

        // Get values from inputs
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Save user info in localStorage
        localStorage.setItem("userName", fullName);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPhone", phone);

        
        window.location.href = "index.html"; 
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const welcomeDiv = document.getElementById("welcomeMessage");
    const userName = localStorage.getItem("userName");

    
    if (welcomeDiv) {
        if (userName) {
            welcomeDiv.textContent = `Welcome, ${userName}!`;
        } else {
            welcomeDiv.textContent = "Welcome, guest!";
        }
    }
});