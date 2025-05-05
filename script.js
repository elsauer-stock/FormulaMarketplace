      // Замените на ваши данные
	  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
	  const supabaseUrl = 'https://mnsluarozhgjzxzyceyc.supabase.co';
	  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc2x1YXJvemhnanp4enljZXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDI3MzAsImV4cCI6MjA1OTcxODczMH0.O9EdkdlU1gBShNV-obV-07E5WY6NAum7SrmG7AHJow8';
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
	  let { data, error } = await supabase.auth.signUp({
		email: 'logunovdmitro@yandex.ru',
		password: 'Rbcksq12'
	  })