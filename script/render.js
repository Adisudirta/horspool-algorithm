const container = document.getElementById("container-card");

function render(elements) {
  container.innerHTML = "";

  elements.forEach((element) => {
    if (element.isActive) {
      container.innerHTML += `
                <div class="card mb-2 text-white bg-success">
                  <div class="card-body">${element.name}</div>
                </div>
          `;
    } else {
      container.innerHTML += `
                <div class="card mb-2 text-white bg-secondary">
                  <div class="card-body">${element.name}</div>
                </div>
        `;
    }
  });
}
