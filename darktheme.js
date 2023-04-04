function toggleTheme() {
  var body = document.body;
  if (body.classList.contains('light')) {
    // Переключаемся на темную тему
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', "dark");
  } else {
    // Переключаемся на светлую тему
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', "light");
  }
}

var savedTheme = localStorage.getItem('theme');
if (savedTheme === "dark") {
  toggleTheme();
}