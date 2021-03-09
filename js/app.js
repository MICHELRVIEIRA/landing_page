/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* 1. Direciona o usuário para o início da página sempre que ela for atualizada. */

window.addEventListener("beforeunload", function() {
  document.querySelector("html").scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* 2. Cria as opções na barra de navegação, de acordo com a quantidade de seções existentes na página. */

/* Armazena na variável "cont_sections" o conteúdo de todos os elementos do tipo "h2". */

const cont_sections = document.querySelectorAll('h2');

/* Cria um fragmento para adicionar as seções existentes na página, na barra de navegação, de forma dinâmica. */

const fragment = document.createDocumentFragment();

/* Loop que realiza a criação das seções no id = "nav__list". */

for (let i = 0; i < cont_sections.length; i++) {

    let newElement = document.createElement('a');

    newElement.innerText = cont_sections[i].textContent;

    fragment.appendChild(newElement).setAttribute("href", "#" + cont_sections[i].textContent.toLowerCase().slice(0, 7) + cont_sections[i].textContent.toLowerCase().slice(8, 9));

    fragment.appendChild(newElement).setAttribute("class", "no-active");
}

/* Seleciona o elemento ao qual vou adicionar o conteúdo de "fragment". */

const element_target = document.querySelector('ul');

/* Adiciona a tag "ul" o conteúdo de "fragment". */

element_target.appendChild(fragment);

/* 3. Marca em vermelho a seção visualziada na tela. */

/* Fazer um loop carregando a posição top de todos as seções. */

let target_sections = "";
let section = "";
let menor = Math.abs(document.getElementById("section1").getBoundingClientRect().top);
let maior = 0;

window.addEventListener("scroll", function() {
    
    for (let i = 1; i < document.querySelectorAll('h2').length + 1; i++) {
    
        target_sections = document.getElementById("section" + i);

        // target_sections.className = "not-active-class";

        document.getElementById("section" + i).style.backgroundColor = null;

        maior = Math.abs(target_sections.getBoundingClientRect().top);

        // Encontra a seção que está com menor distância absoluta do topo da página.

        if (menor > maior) {
            section = "section" + i;
        }

    };

    // Aplica a cor vermelha na sessão que possui a menor distância do topo da página.

    // document.getElementById(section).className = "your-active-class";

    document.getElementById(section).style.backgroundColor = "red";

});

/* 4. Direciona o usuário para a seção selecionada na barra de navegação. */

document.addEventListener("DOMContentLoaded", function() {

  document.querySelector("a").addEventListener("click", function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      document.querySelector("html").scrollIntoView({
    
        behavior: 'smooth',
        block: "end",
        inline: "nearest"
        
      });

      window.location.hash = hash;

    };

  });

});