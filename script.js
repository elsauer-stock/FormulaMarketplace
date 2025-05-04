      // Замените на ваши данные
	  const supabaseUrl = 'YOUR_SUPABASE_URL';
	  const supabaseKey = 'YOUR_ANON_KEY';
	  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

	  document.getElementById('login-form').addEventListener('submit', async (e) => {
		  e.preventDefault();
		  
		  const email = document.getElementById('email').value;
		  const password = document.getElementById('password').value;

		  try {
			  const { error } = await supabase.auth.signInWithPassword({
				  email,
				  password
			  });

			  if (error) throw error;

			  alert('Успешный вход!');
			  window.location.href = '/dashboard.html';
		  } catch (error) {
			  alert(error.message);
		  }
	  });

	  function togglePassword() {
		  const passwordInput = document.getElementById('password');
		  if (passwordInput.type === 'password') {
			  passwordInput.type = 'text';
		  } else {
			  passwordInput.type = 'password';
		  }
	  }