var btnabrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btncerrarPopup = document.getElementById('btn-cerrar-popup');
btnabrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
btncerrarPopup.addEventListener('click', function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
});