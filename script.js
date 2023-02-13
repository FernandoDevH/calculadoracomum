const calculadora = document.querySelector('.calculadora')
const botoes = document.querySelector('.calculadora_botoes')


botoes.addEventListener('click', e => {
	if(e.target.matches('button')){
	}
})


const key = e.target
const action = key.dataset.action

if(!action){
	console.log('tecla numerica')
}


