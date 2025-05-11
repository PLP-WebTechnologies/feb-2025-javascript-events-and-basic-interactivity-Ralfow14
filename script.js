// Button click
document.getElementById("magicBtn").addEventListener("click", function () {
    this.textContent = this.textContent === "Click Me!" ? "Magic Happened!" : "Click Me!";
    this.style.backgroundColor = this.style.backgroundColor === "lightgreen" ? "lightblue" : "lightgreen";
  });
  
  // Image Gallery
  let galleryImages = ["images/gallery1.jpg", "images/gallery2.jpg", "images/gallery3.jpg"];
  let currentImage = 0;
  
  function nextImage() {
    currentImage = (currentImage + 1) % galleryImages.length;
    document.getElementById("galleryImage").src = galleryImages[currentImage];
  }
  
  function prevImage() {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("galleryImage").src = galleryImages[currentImage];
  }
  
  // Tabs
  function showTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
    document.getElementById(tabName).style.display = "block";
  }
  
  // Keypress
  document.addEventListener("keydown", function (e) {
    document.body.style.backgroundColor = `hsl(${e.keyCode * 5}, 80%, 90%)`;
  });
  
  // Double-click Secret
  document.getElementById("secretImg").addEventListener("dblclick", function () {
    alert("🎉 Secret Unlocked! 🎉");
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let password = document.getElementById("password").value;
    let feedback = document.getElementById("formFeedback");
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Form submitted successfully!";
      feedback.style.color = "green";
    }
  });
  
  // Real-time validation
  document.getElementById("password").addEventListener("input", function () {
    if (this.value.length < 8) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
    }
  });
  