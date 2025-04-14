document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/.netlify/identity/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'password',
      username: email,
      password: password
    })
  });

  const result = await response.json();

  if (result.access_token) {
    document.getElementById('message').textContent = 'Inicio de sesión exitoso';
    // Redireccionar si quieres:
    // window.location.href = "/";
  } else {
    document.getElementById('message').textContent = 'Error en las credenciales';
  }
});
