const roles = ["Frontend Developer", "Full Stack Developer", "Backend Developer"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingElement = document.getElementById("element");

function type() {
  if (!typingElement) return;

  if (index >= roles.length) index = 0;
  currentText = roles[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 800); // pause before deleting
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 120);
}
type();

// about more button in about secction
const toggleBtn = document.getElementById("toggleBtn");
const moreText = document.getElementById("moreText");

toggleBtn.addEventListener("click", () => {
  moreText.classList.toggle("open");
  toggleBtn.textContent = moreText.classList.contains("open") ? "Show Less" : "Read More";
});

// skill section 
// Animate Linear Bars
document.querySelectorAll('.skill-fill').forEach(bar => {
    const target = parseInt(bar.dataset.percent);
    let value = 0;
    const interval = setInterval(() => {
      if (value >= target) clearInterval(interval);
      bar.style.width = value + "%";
      bar.textContent = value + "%";
      value++;
    }, 15);
  });
  
  // Animate Circular Progress
  document.querySelectorAll('.progress').forEach((circle, index) => {
    const percent = circle.dataset.percent;
    const offset = 283 - (283 * percent) / 100;
    let value = 0;
    const dashInterval = setInterval(() => {
      const val = Math.min(value, percent);
      const currentOffset = 283 - (283 * val) / 100;
      circle.style.strokeDashoffset = currentOffset;
      circle.parentElement.nextElementSibling.querySelector('.circle-value').textContent = val + "%";
      if (val >= percent) clearInterval(dashInterval);
      value++;
    }, 15);
  });
  

  // adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});