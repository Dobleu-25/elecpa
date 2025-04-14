document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("signup-message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const user = await netlifyIdentity.signup({
      email,
      password
    }).catch((err) => {
      message.textContent = "Error: " + err.message;
    });

    if (user) {
      message.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
    }
  });

  if (typeof netlifyIdentity !== "undefined") {
    netlifyIdentity.init();
  }
});
