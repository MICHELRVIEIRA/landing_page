// Code used in tag 'nav' of the 'header'

// TODO: creates the anchor elements of the 'li' tag

const ulFragment = document.createDocumentFragment();

for(let i = 1; i <= 4; i++) {

    const li = document.createElement('li');

    li.innerHTML = `<a href="#secao${i}" id="a${i}">Seção ${i}</a>`;
    
    ulFragment.appendChild(li); 

};

// TODO: adds the anchor elements created in the 'ul' tag

const ulTarget = document.querySelector('ul');

ulTarget.appendChild(ulFragment);

//TODO: active the first anchor element by default. */

const activeSection = document.querySelector('a');

activeSection.className = 'active';

// Code used in tags 'section' of the 'main'

//TODO: Creates the document sections and adds the corresponding headings and texts to each one

const texSection = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. ' +
            'Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus ' +
            'imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. ' +
            'Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar ' +
            'quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, ' +
            'aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, ' +
            'pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ' +
            'ultricies molestie semper in tellus. Sed congue et odio sed euismod.<br>' +
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet ' +
            'velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. ' +
            'Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget ' +
            'elementum tortor mollis non.<br>' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. ' +
            'Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus ' +
            'imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. ' +
            'Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar ' +
            'quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, ' +
            'aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, ' +
            'pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ' +
            'ultricies molestie semper in tellus. Sed congue et odio sed euismod.<br>' +
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet ' +
            'velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. ' +
            'Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget ' +
            'elementum tortor mollis non.</p>';

const mainFragment = document.createDocumentFragment();

for(let i = 1; i <= 4; i++) {

    const section = document.createElement('section');
    
    // TODO: active the first tag 'section' created

    if (i == 1) {
        section.setAttribute('class', 'active');
    };

    section.innerHTML = `<h2 id=secao${i}>Seção ${i}</h2>${texSection}`;
    
    mainFragment.appendChild(section);
};

const mainTarget = document.querySelector('main');

mainTarget.appendChild(mainFragment);

// TODO: activates the elements corresponding to the selected section

document.addEventListener('click', function(event) {

    // Deactivates the class of elements that were active

    const classActive = document.querySelectorAll('.active');
    
    for(i = 0; i < classActive.length; i++) {
        classActive[i].removeAttribute('class');    
    };

    // Checks if the clicked tag was of type "a", what is its 'ID' and activates this tag

    const idClick = event.target.id;
    const tagClick = document.getElementById(idClick).tagName.toString().toLowerCase();

    if (tagClick == 'a') {
        document.getElementById(idClick).setAttribute('class', 'active');
    };

    // Searches for the element that has the same 'ID' as the value of the 'href' of the activated tag

    const hrefID = document.getElementById(idClick).getAttribute('href').toString().replace('#', '');

    const sectionTarget = document.getElementById(hrefID);

    // Activates the parent element corresponding to the clicked section and its children.

    sectionTarget.parentElement.setAttribute('class', 'active');

});