class homeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Use the correct lifecycle method `connectedCallback`
  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
          header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0em 2em 0em 2em;
              margin-top: 0;
              height: 70px;
              position: sticky; /* Make the header sticky */
              top: 0; /* Position it at the top of the viewport */
              z-index: 1000; /* Ensure it stays above other content */
              background-color: white; /* Set a background color to avoid transparency issues */
          }
  
          nav {
              display: flex;
              align-items: center;
              gap: 7rem;
          }
  
          nav a {
              color: black; /* Set the anchor text color to black */
              text-decoration: none; /* Remove underline */
          }
  
          nav a:hover {
              color: #444; /* Change color on hover */
          }
  
          .nav_Item-1, .nav_Item-2, .nav_Item-3, .nav_Item-4 {
              font-size: medium; /* Set a base font size */
              font-weight: 400; /* Set base font weight */
              color: black; /* Set a base color */
              background-color: transparent; /* Set a base background */
              border: 1px solid transparent; /* Set a base border */
              padding: 8px 15px;
              border-radius: 4px;
              box-sizing: border-box;
              transition: font-size 0.3s ease, color 0.3s ease, background-color 0.3s ease, border 0.3s ease; /* Smooth transition */
          }
  
          .nav_Item-1:hover,
          .nav_Item-2:hover,
          .nav_Item-3:hover,
          .nav_Item-4:hover {
              font-size: larger; /* Change font size on hover */
              font-weight: 500; /* Change font weight on hover */
              color: #000; /* Change color on hover */
              padding: 8px 25px; /* Increase the width slightly */
              background-color: rgba(0, 0, 0, 0.2); /* Transparent dark grey */
              cursor: pointer;
          }
  
          .logo {
              font-size: 1.8em;
              font-weight: 900;
          }
  
          .button-50 {
              appearance: button;
              background-color: #000;
              background-image: none;
              border: 1px solid #000;
              border-radius: 4px;
              box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
              box-sizing: border-box;
              color: #fff;
              cursor: pointer;
              display: inline-block;
              font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              margin: 0 5px 10px 0;
              overflow: visible;
              padding: 12px 40px;
              text-align: center;
              text-transform: none;
              touch-action: manipulation;
              user-select: none;
              -webkit-user-select: none;
              vertical-align: middle;
              white-space: nowrap;
              /* Add transition for smooth hover effect */
              transition: background-color 0.3s ease, transform 0.3s ease;
          }
  
          .button-50:focus {
              text-decoration: none;
          }
  
          .button-50:hover {
              text-decoration: none;
              background-color: #333; /* Change background color on hover */
              transform: translateY(-2px); /* Slightly lift the button */
          }
  
          .button-50:active {
              box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
              outline: 0;
          }
  
          .button-50:not([disabled]):active {
              box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
              transform: translate(2px, 2px);
          }
  
          @media (min-width: 768px) {
              .button-50 {
                  padding: 12px 50px;
              }
          }
  
        </style>
  
        <header>
          <h4 class="logo">Callum</h4>
          <nav>
              <p class="nav_Item-1" id="homeBtn"><a href="#content-Intro">home</a></p>
              <p class="nav_Item-2" id="aboutMeBtn"><a href="#aboutMe">about me</a></p>
              <p class="nav_Item-3" id="projBtn"><a>projects</a></p>
              <p class="nav_Item-4" id="servicesBtn"><a>Services</a></p>
          </nav>
          <button class="button-50" role="button" id="contact">Let's Talk</button>
        </header>
      `;
  }
}

customElements.define("custom-header", homeHeader);
