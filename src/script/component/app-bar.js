class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               text-align: center;
               font-size: 4vw;
           }
           :host {
               display: block;
               width: 100%;
               background-color: #ff3333;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }

           .profile img {
            width: 90px;
            padding: 2px;
            margin-top: 1px;
         }

         h2 strong:hover {
            color: GreenYellow;
        }
       </style>
       <h2>
            <strong>
                Cari Makanan
            </strong>
       </h2>

       <figure class="profile">
            <img id="imageFigure" alt="Logo">
        </figure>`;
    }
}

customElements.define("app-bar", AppBar);