function escrevendoletra(){
    function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i);
       
    });
}


const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
}

escrevendoletra()

function menuMobol() {

    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacaoprim')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}

function sobreMim(){

    const divCertificados = document.querySelectorAll('.certificadoss div');
    const liCertificados = document.querySelectorAll('.certificadoss ul li');
    const divEducacao = document.querySelectorAll('.educacaoo div');
    const liEducacao = document.querySelectorAll('.educacaoo ul li');

    divCertificados[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liCertificados[0].classList.add('ativo')
    liEducacao[0].classList.add('ativo')

    function slideShow(index) {
        divCertificados.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liCertificados.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divCertificados[index].classList.add('ativo');
        liCertificados[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
    })
        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo');
    })
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    liCertificados.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    liEducacao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

}
sobreMim();
