class introductionDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
        /*Content*/
        .content {
          display: flex;                     
          align-items: center;               
          justify-content: space-between;     
          max-width: 1200px;                 
          height: 550px;
          margin: 4em auto;                 
          padding: 3em;                     
          background: white;                
          border-radius: 8px;               
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
  
        #profile-Img {
          width: 24%;                       
          display: flex;                    
          justify-content: center;          
          align-items: center;              
          margin-right: 3em;               
        }
  
        #profile-Img img {
          width: 100%;                     
          height: auto;                     
          border-radius: 50%;               
          border: 1px solid #000;           
          box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
          box-sizing: border-box;            
        }
  
        .Content_context {
          flex: 1;                         
          padding: 0 2em;                 
        }
  
        h3.greeting, h1.intro-Heading, p.context_intro {
          margin: 0 0 1.5em 0;             
        }
  
        .Buttons {
          margin: 1.5em 0;                 
        }
  
        button {
          background-color: #000;          
          color: #fff;                     
          border: none;                    
          border-radius: 4px;             
          padding: 12px 24px;             
          cursor: pointer;                 
          transition: background-color 0.3s;
        }
  
        button:hover {
          background-color: #444;          
        }
  
        .Links {
          margin-top: 2em;                 
          display: flex;                   
          gap: 1.5em;                      
          justify-content: center;         
        }
  
        .Links .logo {
          position: relative;
          display: inline-block;
          font-size: 18px;
          padding: 8px 15px;
          color: #000;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
  
        .Links .logo a {
          text-decoration: none;
          color: inherit;
        }
  
        .Links .logo:hover {
          padding: 8px 25px; 
          background-color: rgba(0, 0, 0, 0.2); 
          cursor: pointer;
        }
  
        .Links .logo:active {
          background-color: rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
        }
  
        a {
          color: #fff;
          text-decoration: none;
        }
  
        </style>
  
        <div class="content" id="content-Intro">
          <div id="profile-Img" class="Content_context">
            <img src="assets/logo_img01.jpg" alt="Image of a reaper drinking coffee" />
          </div>
          <div id="context" class="Content_context">
            <h3 class="greeting">WELCOME TO MY WORLD</h3>
            <h1 class="intro-Heading">Hi I'M <span class="name">Callum</span></h1>
            <p class="context_intro">
              A passionate aspiring full-stack developer currently enrolled in
              CodeSpace Academy’s Full Stack Development Program. My motivation
              stems from a love for technology and problem-solving, and I'm
              dedicated to building intuitive, efficient web solutions. With a
              foundation in HTML5, CSS, JavaScript, and Git, I'm continuously
              expanding my skill set while developing real-world projects. My goal
              is to grow into a versatile developer, ready to take on dynamic
              challenges in software development and contribute to meaningful
              digital experiences.
            </p>
            <div class="Buttons">
              <button>Hire Me Now!</button>
              <a href="assets/Callum_CV.pdf" download="Callum_CV">
                <button>Download CV</button>
              </a>
            </div>
            <div class="Links">
              <div class="logo logo-github">
                <a href="https://github.com/eerykinkajou137" target="_blank">GitHub</a>
              </div>
              <div class="logo logo-linkedin">
                <a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
              </div>
              <div class="logo logo-codepen">
                <a href="https://codepen.io/your-username" target="_blank">Codepen</a>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("custom-main", introductionDiv);
