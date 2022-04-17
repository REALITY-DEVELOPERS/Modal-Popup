const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	var music = new Audio('../sounds/kira01.wav');
	music.volume = 0.4;
	if(modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
	
	music.play();
	music.stop();
}

function closeModal(modal) {
	var music = new Audio('../sounds/cancel00.wav');
	music.volume = 0.2;
	if(modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
	

	music.play();
	music.stop();
}


function play() {
	var audio = document.getElementById("audio");
	audio.play();
	audio.stop();
}
	  
function playMusic(){
	var music = new Audio('../sounds/kira01.wav');
	music.play();
	music.stop();
}