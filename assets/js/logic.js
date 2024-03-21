//created for both pages to toggle back and forth from light to dark
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');


    //Save the user's preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});