// Select all paragraphs with the class "status-indicator"
const statusNodes = document.querySelectorAll(".status-indicator");

// Loop through each paragraph
statusNodes.forEach((paragraph) => {
  paragraph.textContent = "System Ready";
});