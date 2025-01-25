document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const temp = document.querySelector('#temp');

hamButton.addEventListener('click', () => {
	console.log("click-button")
	temp.classList.toggle('open');
	hamButton.classList.toggle('open');
});



