class waterMark extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
          footer{
            display:flex;
            color: black;
            flex-direction:column;
            justify-content:center;
            align-items:center;

            margin:0;
            padding:0;
          }
          .footerp{
            font-size: 0.8em;

          }
        </style>
        <footer>
          <p class="footerp">Designed & Built by Callum Govender</p>
          <p class="footerp"><a>callumlevigovender@gmail.com</a></p>
        </footer>`;
  }
}

customElements.define("custom-footer", waterMark);
