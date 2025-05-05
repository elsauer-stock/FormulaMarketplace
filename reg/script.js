
// Подключение Supabase
const supabase = window.supabase.createClient(
    'https://mnsluarozhgjzxzyceyc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc2x1YXJvemhnanp4enljZXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDI3MzAsImV4cCI6MjA1OTcxODczMH0.O9EdkdlU1gBShNV-obV-07E5WY6NAum7SrmG7AHJow8'
  );
  
  document.addEventListener('DOMContentLoaded', function () {
    // Спойлеры
    document.querySelectorAll('.spoiler-btn').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Проверка сессии
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        window.location.href = 'login.html';
      }
    });
  });
  
  // Открытие модалки с профилем
  function openSettings() {
    fetch('settings-modal.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('settingsModalContainer').innerHTML = html;
        setTimeout(() => {
          if (typeof loadProfile === 'function') {
            loadProfile();
          }
        }, 100);
      })
      .catch(err => {
        console.error("Ошибка загрузки модального окна:", err);
      });
  }
  
  // Глобальная функция выхода
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Ошибка выхода: ' + error.message);
    } else {
      window.location.href = 'login.html';
    }
  }
  