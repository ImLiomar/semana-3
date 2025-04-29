
function handlesubmit(event) {
    event.preventDefault();
    console.log("Hola Mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handlesubmit);
