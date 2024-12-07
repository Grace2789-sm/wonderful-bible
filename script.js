// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const suprise = urlParams.get('suprise'); // Get the 'suprise' parameter

// Select the content container
const contentDiv = document.getElementById('content');

// Display content based on the URL parameter
if (suprise === 'true') {
  contentDiv.innerHTML = `
    <h1>Surprise! 🎉</h1>
    <p>You discovered a hidden message! Have a blessed day.</p>
  `;
} else {
  contentDiv.innerHTML = `
    <h1>Welcome!</h1>
    <p>Explore our website for more content.</p>
  `;
}
