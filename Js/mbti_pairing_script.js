// JavaScript for MBTI Pairing Page

// Import Firebase modules
import { db } from './firebase-init.js';


// Toggle Novel and Oneshots Section
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function () {
        const target = this.dataset.target;
        document.querySelectorAll('.story-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(target).style.display = 'block';
    });
});

// Handle Chapter Listing Dropdown
document.querySelectorAll('.chapter-listing-btn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('hidden');
    });
});

// Scroll to Chapter Section
document.querySelectorAll('.chapter-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const chapterId = this.getAttribute('href');
        document.querySelector(chapterId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// AOS Initialization for Scroll Animations
AOS.init();
