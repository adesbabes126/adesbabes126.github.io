document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password-input');
  const loginBtn = document.getElementById('login-btn');
  const errorMsg = document.getElementById('error-msg');
  const loginContainer = document.getElementById('login-container');
  const letterContainer = document.getElementById('letter-container');

  loginBtn.addEventListener('click', function() {
    if (passwordInput.value === 'shannong') {
      loginContainer.classList.add('hidden');
      letterContainer.classList.remove('hidden');
    } else {
      errorMsg.textContent = 'Incorrect password. Try again.';
    }
  });

  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      loginBtn.click();
    }
  });
});
