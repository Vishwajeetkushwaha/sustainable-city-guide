document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;

    // Toggle the current FAQ item
    faqItem.classList.toggle('active');

    // Collapse other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});

// script.js
const autoTypeElement = document.getElementById('auto-type');
const phrases = ['Green Living', 'Eco Solutions', 'Smart Cities', 'Bold Choices'];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenPhrases = 2000;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    autoTypeElement.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (charIndex > 0) {
    autoTypeElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, delayBetweenPhrases);
});





const gallery = document.querySelector('.gallery');

function scrollLeft() {
  gallery.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
  gallery.scrollBy({ left: 200, behavior: 'smooth' });
}


