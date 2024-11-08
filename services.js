class ServicesSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
      /* Services Section */
      h2.heading {
        margin: 0 0 1.5em 0;
      }

     
  
      .content-Services {
        display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;                     /* Use flexbox for layout */
    align-items: center;               /* Center items vertically */
    justify-content: space-between;     /* Space between image and text */
    max-width: 1200px;                /* Set a max width for the container */
    margin: 4em auto;                 /* Center the content with larger margin */
    padding: 3em;                     /* Add padding for inner spacing */
    background: white;                /* White background for contrast */
    border-radius: 8px;               /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      }
  
      p.context-services {
        width: 100%;
        font-size: 1rem;
        line-height: 1.5;
      }
  
      .V-Line {
        width: 5px; /* Set a width for visibility */
    background-color: rgba(0, 0, 0, 0.1); /* Subtle black background for the vertical line */
    height: 100%; /* Make it span the full height of its container */
    min-height: 450px; /* Ensure a minimum height */
      }
  
      .container {
        width: 80%;
        margin: 20px;
        padding: 20px;
      }
  
      .content_container {
        display: flex;
        gap: 5%; /* Reduced gap between containers */
        justify-content: space-between;
        align-items: flex-start;
        
        padding-left: 5%;
        padding-right: 5%;
      }
  
      .skills {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }
  
      .skills li {
        margin-bottom: 0.5em;
        font-size: 1rem;
        line-height: 1.5;
      }
  
      .container-2 {
        margin: 20px;
        padding: 20px;
      }

      @media (max-width: 768px) {
      .content-Services {
    flex-direction: column;
    gap: 1em;
    padding: 1.5em;
    max-width: 100%;
    margin-top: 20%;
    text-align: left;
  }

  .content_container {
    flex-direction: row;
    width: 100%;
    gap: 1em;
    padding-left: 5%;
    padding-right: 5%;
  }

  .container {
    width: 100%;
    margin: 5%;
    padding: 5%;
  }
    .container-2{
  margin: 20px;
  padding: 20px;
}

  .V-Line {
    display: none;
  }
      
      }
      </style>
  
      <div class="content-Services" id="services">
        <h1 class="heading">My Services</h1>
        <br>
        <div class="content_container">
          <!-- Web Development Section -->
          <div class="container">
            <h3>Web Development:</h3>
            <br/>
            <p class="context-services">
              I offer custom websites built with HTML5, CSS3, Tailwind CSS, and JavaScript. My websites are responsive and optimized for user experience, ensuring a seamless interaction on any device.
            </p>
            <ul class="skills">
              <li>Custom websites built with HTML5, CSS3, Tailwind CSS, and JavaScript</li>
              <li>Responsive, user-friendly layouts and components</li>
              <li>Front-end development using vanilla JavaScript and modern frameworks</li>
              <li>Web component design for reusability and encapsulation</li>
            </ul>
          </div>
  
          <!-- Vertical Line Section -->
          <div class="V-Line"></div>
  
          <!-- JavaScript Development Section -->
          <div class="container-2">
            <h3>JavaScript Development:</h3>
            <p class="context-services">
              I specialize in JavaScript, from simple interactive elements to complex applications. I ensure that all code is clean, maintainable, and optimized for performance.
            </p>
            <ul class="skills">
              <li>Custom JavaScript applications tailored to client needs</li>
              <li>Object-oriented programming using classes and functions</li>
              <li>Debugging and refactoring code for better performance</li>
              <li>JavaScript concepts like closures, arrays, functions, and events</li>
            </ul>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define("custom-section", ServicesSection);
