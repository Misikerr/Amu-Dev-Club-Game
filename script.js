// Button Elements
const adminBtn = document.getElementById("admin-btn");
const playerBtn = document.getElementById("player-btn");

// Modal Elements
const adminModal = document.getElementById("adminModal");
const closeModal = document.querySelector(".close");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.getElementById("errorMessage");
const adminPasswordInput = document.getElementById("adminPassword");

// Show Admin Login Modal
adminBtn.addEventListener("click", () => {
    adminModal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    adminModal.style.display = "none";
    resetModal();
});

// Redirect to Player Page
playerBtn.addEventListener("click", () => {
    window.location.href = "provider.html";
});

// Admin Login Validation
loginBtn.addEventListener("click", () => {
    const correctPassword = "@Card"; // Replace with your password logic
    const enteredPassword = adminPasswordInput.value;

    if (enteredPassword === correctPassword) {
        window.location.href = "admin.html"; // Redirect to admin page
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
});

// Reset Modal
function resetModal() {
    adminPasswordInput.value = "";
    errorMessage.style.display = "none";
}

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
    if (event.target === adminModal) {
        adminModal.style.display = "none";
        resetModal();
    }
});
