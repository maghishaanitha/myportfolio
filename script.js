/* ============================================
   MAGHISHA PORTFOLIO — 🌊 OCEAN SCRIPTS
   ============================================ */

// ===== 1. 🫧 BUBBLES GENERATE PANNUM =====
const ocean = document.getElementById("ocean");
const bubbleCount = 22;

for (let b = 0; b < bubbleCount; b++) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const size = Math.random() * 18 + 6;   // 6px to 24px
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.animationDuration = (Math.random() * 10 + 8) + "s";  // 8s to 18s
  bubble.style.animationDelay = (Math.random() * 12) + "s";

  ocean.appendChild(bubble);
}

// ===== 2. TYPING ANIMATION =====
const roles = [
  "BCA Student 🎓",
  "Web Developer 💻",
  "Creative Thinker 🎨",
  "Fast Learner ⚡",
  "Explorer 🌊"
];

let i = 0, j = 0, deleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const word = roles[i];
  typingEl.textContent = word.substring(0, j);

  if (!deleting && j < word.length) {
    j++;
    setTimeout(type, 90);
  } else if (deleting && j > 0) {
    j--;
    setTimeout(type, 45);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1600);
  } else {
    deleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 350);
  }
}
type();

// ===== 3. SCROLL REVEAL + SKILL BAR FILL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      entry.target.querySelectorAll(".skill-fill").forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(section => observer.observe(section));

// ===== 4. PHOTO FALLBACK =====
// profile.jpg illana "M" letter kaatum (broken icon varaathu!)
const photo = document.querySelector(".photo-box img");

if (photo) {
  photo.addEventListener("error", () => {
    photo.style.display = "none";
    const placeholder = document.createElement("span");
    placeholder.className = "photo-placeholder";
    placeholder.textContent = "M";
    photo.parentElement.appendChild(placeholder);
  });
}