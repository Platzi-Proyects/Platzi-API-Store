class MiElemento extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="p-3 sticky-top">
    <nav class="navbar navbar-expand-lg bg-secondary-p rounded-5 mb-2 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">Platzi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/src/views/pages/delete/delete.html">Delete</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

`;
    }
}

window.customElements.define("nav-bar", MiElemento);
