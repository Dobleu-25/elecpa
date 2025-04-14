// js/auth.js

// Inicializar el widget de Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Intentar login con Netlify Identity
          window.netlifyIdentity.login(email, password, true).then((user) => {
            document.getElementById("message").textContent =
              "Inicio de sesión exitoso";
            // Redireccionar si quieres:
            // window.location.href = "/";
          }).catch((err) => {
            console.error("Login failed:", err);
            document.getElementById("message").textContent =
              "Error en las credenciales";
          });
        });
      }
    }
  });

  window.netlifyIdentity.init();
}

