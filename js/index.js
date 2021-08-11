const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const respuesta = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    });
    if (respuesta.ok) {
        this.reset();
        alert("¡Tu formulario ha sido enviado con éxito! Te contactaremos a la brevedad");
    }
}