class sepLine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
    .line {
        height: 3px; /* Line thickness */
        background-color: rgba(0, 0, 0, 0.1); /* Subtle black color */
        margin: 20px 0; /* Add some space around the line */
    }
    </style>
    
    <div class="line"></div>
    `;
  }
}

customElements.define("custom-div", sepLine);
