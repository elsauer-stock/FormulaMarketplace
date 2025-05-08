
// Подключение Supabase
const supabase = window.supabase.createClient(
  'https://mnsluarozhgjzxzyceyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc2x1YXJvemhnanp4enljZXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDI3MzAsImV4cCI6MjA1OTcxODczMH0.O9EdkdlU1gBShNV-obV-07E5WY6NAum7SrmG7AHJow8'
);


  // Спойлеры
  document.querySelectorAll('.spoiler-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  document.addEventListener('DOMContentLoaded', async () => {
    const supabase = window.supabase.createClient(
      'https://mnsluarozhgjzxzyceyc.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc2x1YXJvemhnanp4enljZXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDI3MzAsImV4cCI6MjA1OTcxODczMH0.O9EdkdlU1gBShNV-obV-07E5WY6NAum7SrmG7AHJow8'
    );
  
    const { data: { session } } = await supabase.auth.getSession();
  
    if (!session) {
      window.location.href = 'login.html';
      return;
    }
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
    window.location.href = '/login.html';
  }
}
function openLesson(id) {
  document.querySelector(".lesson-list").style.display = "none";
  document.getElementById("lesson-content").style.display = "block";
}

function closeLesson() {
  document.getElementById("lesson-content").style.display = "none";
  document.querySelector(".lesson-list").style.display = "flex";
}

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");

  document.getElementById(tab).style.display = "block";
  document.querySelector(`.tab[onclick="showTab('${tab}')"]`).classList.add("active");
}

async function openSettings() {
  const res = await fetch('settings-modal.html');
  const html = await res.text();
  document.getElementById('settingsModalContainer').innerHTML = html;
}
document.querySelector('.logout').addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
});
