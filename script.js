const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

function closeOpenSidebar() {
   sidebar.classList.toggle('active');
}
menuBtn.addEventListener('click', closeOpenSidebar);

closeBtn.addEventListener('click', closeOpenSidebar);
