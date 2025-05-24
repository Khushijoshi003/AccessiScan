// Sidebar Toggle
const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click', () => {
  // Toggle sidebar visibility
  sidebar.classList.toggle('active');
  
  // Determine sidebar state and show notification
  const state = sidebar.classList.contains('active') ? 'opened' : 'closed';
  showNotification(`Sidebar ${state}`);
});

// Dark Mode Toggle
const darkModeBtn = document.querySelector('.dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
  // Toggle dark mode class on the body
  document.body.classList.toggle('dark-mode');
  
  // Determine mode and update button text
  const mode = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  darkModeBtn.textContent = mode;

  // Show notification about mode switch
  showNotification(`Switched to ${mode}`);
});

// Notification Function
function showNotification(message) {
  const container = document.getElementById('notification-container');

  // Create a notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  // Append the notification to the container
  container.appendChild(notification);

  // Remove the notification after it fades out
  setTimeout(() => {
    notification.remove();
  }, 4000); // Matches the fade-out animation duration in CSS
}

// Initialize Notifications (Container)
document.body.insertAdjacentHTML(
  'beforeend',
  `<div id="notification-container" aria-live="polite"></div>`
);

// Language Support (English Only)
const translations = {
  en: {
    heroHeading: "Scan Any Website for Safety",
    heroDesc: "Paste a URL below and click scan to check for threats.",
    scanButton: "Scan",
    faqHeading: "Frequently Asked Questions",
    faqQ1: "What does this scanner do?",
    faqA1: "It analyzes websites for potential threats like malware and phishing.",
    faqQ2: "Is it free to use?",
    faqA2: "Yes, this scanner is completely free for personal use.",
    faqQ3: "Do you store URLs?",
    faqA3: "No, we do not store any URLs you submit.",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    sidebarOpened: "Sidebar opened",
    sidebarClosed: "Sidebar closed"
  }
};

// Update UI Text to English
function updateLanguageToEnglish() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  // Update text content of elements with data-i18n attributes
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations.en[key]) {
      el.textContent = translations.en[key];
    }
  });

  // Update dark mode button text based on the current mode
  darkModeBtn.textContent = document.body.classList.contains('dark-mode')
    ? translations.en['lightMode']
    : translations.en['darkMode'];
}

// Initialize Language (English Only)
updateLanguageToEnglish();