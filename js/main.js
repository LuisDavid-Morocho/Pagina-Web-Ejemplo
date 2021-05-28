const btnmenu = document.querySelector('.icon-menu');
const btnInicio = document.querySelector('.desInicio');
const btnInfo = document.querySelector('.desInfo');
const btnServi = document.querySelector('.desServi');
const btnGrafico = document.querySelector('.desGra');
const btnWeb = document.querySelector('.desWeb');


window.onload = function mov_text(){
	var tex = document.querySelector('.scroll_anima');
	tex.classList.add('transform_up');
	tex.classList.add('scroll_apa');
}

btnInicio.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});
btnInfo.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});
btnServi.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});
btnGrafico.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});
btnWeb.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});

btnmenu.addEventListener('click', function(){
 	document.getElementById('menu2').classList.toggle('is-active');
});



window.addEventListener('scroll', function(){
	var imagen = document.querySelectorAll('.scroll_animate');

	for (var i = 0; i< imagen.length ; i++) {
		var altura = window.innerHeight/1.18;
		var distancia = imagen[i].getBoundingClientRect().top;

		imagen[i].classList.add('transform_up');

		if(distancia <= altura){
			imagen[i].classList.add('scroll_aparece');
		}
		else{
			imagen[i].classList.remove('scroll_aparece');
		}
	}
});

