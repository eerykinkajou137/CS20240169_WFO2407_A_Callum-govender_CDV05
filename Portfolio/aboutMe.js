class aboutMe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
    

/*Aboout me Section*/
 
h2.heading {
    margin: 0 0 1.5em 0;
  }
  
  .content-AboutMe{
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  
  p.context {
    width: 100%; /* Set width to 25% of the container */
  /* Ensures padding and borders are included in the width */
  }
  
  .V-Line {
    width: 5px; /* Set a width for visibility */
    background-color: rgba(0, 0, 0, 0.1); /* Subtle black background for the vertical line */
    height: 100%; /* Make it span the full height of its container */
    min-height: 450px; /* Ensure a minimum height */

 
  }
  
  .container {

    width: 30%;
    margin: 20px;
    padding: 20px;
  }
  
  .content_container {
    display: flex;
    gap: 10%;
    justify-content: space-between;
    align-items: flex-start; /* Align items at the top */
    height: auto; /* Adjusts to the content height */
    padding-left: 10%;
    padding-right: 10%;
  }
  
  .skills {
    list-style: none; /* Remove default bullet points */
    padding: 0;
  }
  
  .skills li {
    margin-bottom: 0.5em;
  }

.container-2{
  margin: 20px;
  padding: 20px;
}
  
  



    </style>

     <div class="content-AboutMe" id="aboutMe">
      <h1 class="heading">More About Me -</h1>

      <br />

      <div class="content_container">
        <!-- Education Section -->
        <div class="container">
          <h3>My Education:</h3>
          <br />
          <p class="context-aboutme">
            I completed my Matric in 2023 at Apollo Secondary School, where I
            studied a variety of subjects including Mathematics, Physics, and
            Information Technology.
          </p>
          <p class="context-aboutme">
            Currently, I am enrolled in CodeSpace Academy's Full-time Full-Stack
            Software Development Course, where I am honing my skills in web
            development, JavaScript, and full-stack technologies. This program
            has given me hands-on experience in building modern web
            applications, preparing me for a career in software development.
          </p>
        </div>

        <!-- Vertical Line Section -->
        <div class="V-Line"></div>

        <!-- Skillset Section -->
        <div class="container-2">
          <h3>My Skillset:</h3>
          <br />
          <ul class="skills">
            <li>HTML 5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Tailwind CSS Frameworks</li>
          </ul>
        </div>
      </div>
      <!-- End content_container -->
    </div>
    <!-- End content -->
    
    `;
  }
}

customElements.define("custom-aboutme", aboutMe);
