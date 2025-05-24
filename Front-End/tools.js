document.addEventListener('DOMContentLoaded', function () {

    // Tool Buttons Event Listeners
    const ctaButtons = document.querySelectorAll('.cta-button');
  
    ctaButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const toolName = this.textContent.toLowerCase().replace(" ", "-");
        
        // Redirect to the respective tool's page or section (you can replace this with actual functionality)
        switch (toolName) {
          case 'use-image-scanner':
            window.location.href = '#image-scanner';
            break;
          case 'check-contrast':
            window.location.href = '#color-contrast-checker';
            break;
          case 'validate-alt-text':
            window.location.href = '#alt-text-validator';
            break;
          case 'generate-score':
            window.location.href = '#accessibility-score';
            break;
          case 'analyze-page':
            window.location.href = '#live-page-analyzer';
            break;
          default:
            alert('Coming Soon!');
        }
      });
    });
  
    // Modal logic for tool descriptions (optional enhancement)
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
      const toolName = card.querySelector('h2').textContent.toLowerCase().replace(" ", "-");
      const toolButton = card.querySelector('.cta-button');
      
      // Adding a tooltip or more description on click (optional)
      toolButton.addEventListener('mouseover', () => {
        card.querySelector('p').style.color = '#0077B6'; // Change description text color on hover
      });
      toolButton.addEventListener('mouseout', () => {
        card.querySelector('p').style.color = '#444'; // Reset color
      });
  
      // Sample Modal/Pop-Up (You can add this code to show more info)
      toolButton.addEventListener('click', () => {
        alert(`More details about the ${toolName.replace(/-/g, ' ')} tool are coming soon!`);
      });
    });
  
    // Optional: Modal for displaying a tool's detailed description
    // Implement the modal with actual content for each tool
  
    function showToolDescription(tool) {
      const modal = document.createElement('div');
      modal.classList.add('tool-modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>${tool} Tool</h2>
          <p>This is where you can explain the features of the ${tool} tool.</p>
          <p>More details will be added soon. Stay tuned!</p>
        </div>
      `;
      document.body.appendChild(modal);
  
      // Close Modal Event
      modal.querySelector('.close-btn').addEventListener('click', function () {
        modal.remove();
      });
    }
  
    // Uncomment the line below to test the modal with a tool
    // showToolDescription("Image Scanner");
  
  });
  