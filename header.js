let isMobileOrTablet = window.innerWidth < 1024;

function checkSize() {
  // Recalculate the size every time the window is resized
  isMobileOrTablet = window.innerWidth < 1024;
}

// Add event listener to monitor resize events
window.addEventListener("resize", checkSize);

// Call checkSize initially to set the state when the page loads
checkSize();

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
            position: sticky; 
            top: 0; 
            z-index: 1000;
            background-color: white;
          }

          nav {
            display: flex;
            align-items: center;
            gap: 7rem;
          }

          nav a {
            color: black;
            text-decoration: none;
          }

          nav a:hover {
            color: #444;
          }

          .nav_Item-1, .nav_Item-2, .nav_Item-3, .nav_Item-4 {
            font-size: medium;
            font-weight: 400;
            color: black;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 8px 15px;
            border-radius: 4px;
            box-sizing: border-box;
            transition: font-size 0.3s ease, color 0.3s ease, background-color 0.3s ease, border 0.3s ease;
          }

          .nav_Item-1:hover, .nav_Item-2:hover, .nav_Item-3:hover, .nav_Item-4:hover {
            font-size: larger;
            font-weight: 500;
            color: #000;
            padding: 8px 25px;
            background-color: rgba(0, 0, 0, 0.2);
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
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .button-50:focus {
            text-decoration: none;
          }

          .button-50:hover {
            background-color: #333;
            transform: translateY(-2px);
          }

          .button-50:active {
            box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
            outline: 0;
          }

          .button-50:not([disabled]):active {
            box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
            transform: translate(2px, 2px);
          }

          @media (max-width: 768px) {
            header {
              display: flex;
              justify-content: space-between;
            }

            header nav {
              display: none; /* Hide nav on smaller screens */
            }

            .button-50 {
              position: absolute;
              right: 10%; /* Position button 10% from the right edge */
            }
            
            br {
              padding: 20%;
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
    // Attach event listeners inside shadow DOM for larger screens
    this.shadowRoot
      .querySelector("#aboutMeBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        let component = "custom-aboutMe"; // Component to load
        loadPage(component);
      });

    this.shadowRoot
      .querySelector("#homeBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        let component = "custom-main"; // Component to load
        loadPage(component);
      });

    this.shadowRoot
      .querySelector("#servicesBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        let component = "custom-section"; // Component to load
        loadPage(component);
      });
  }
}

// Define custom header element
customElements.define("custom-header", homeHeader);

function loadPage(component) {
  if (!isMobileOrTablet) {
    document.getElementById("page").innerHTML = "";
    const componentElement = document.createElement(component);
    document.getElementById("page").appendChild(componentElement);
  } else {
    document.getElementById("page").innerHTML = "";
    const componentBr = document.createElement("custom-div");
    const componentElement = document.createElement("custom-main");
    const componentElement2 = document.createElement("custom-aboutMe");
    const componentElement3 = document.createElement("custom-section");

    document.getElementById("page").appendChild(componentElement);
    document.getElementById("page").appendChild(componentBr);
    document.getElementById("page").appendChild(componentElement2);
    document.getElementById("page").appendChild(componentBr);
    document.getElementById("page").appendChild(componentElement3);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let component = "custom-main";
  loadPage(component);
});
