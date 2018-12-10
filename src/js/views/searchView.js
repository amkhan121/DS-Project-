import {elements} from './base';
//import { ELOOP } from 'constants';

export const getInput =() => elements.searchInput.value;
export const clearInput =() =>{
    elements.searchInput.value='';
}; 

export const clearResults = () =>{
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

const renderMember = busstop =>{
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${busstop.atcocode}">
                        <figure class="results__fig">
                            <img src="img/bus-stop-icon.png" alt="Test">
                        </figure>
                <div class="results__data">
                    <h4 class="results__name">${busstop.name}</h4>
                    <p class="results__author">${busstop.description}</p> 
                </div>
            </a>
        </li>
    
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);

};

//Type: 'prev' or 'next'
const createButton = (page, type)=>`
    <button class="btn-inline results__btn--${type}" data-goto=${type==='prev' ? page -1 : page +1}>
         <span>Page ${type==='prev' ? page -1 : page +1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type==='prev' ? 'left': 'right'}"></use>
            </svg>
    </button>
`;

const renderButtons = (page, numbResults, resPerPage) =>{
    const pages = Math.ceil(numbResults/resPerPage);
    let button;
    if (page === 1 && pages > 1){
        //Only button to go to next page 
        button = createButton(page, 'next');
    }else if(page < pages){
        //Both buttons 
        button = `
            ${createButton(page,'prev')}
            ${createButton(page,'next')}
        `;

    }else if(page === pages && pages> 1){
        //Only buttton to go to previouse page 
        button = createButton(page,'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);

};

 
export const renderResults = (member, page=1, resPerPage = 4) => {
    //render results of current page
    //console.log(member);
    const start = (page-1) *resPerPage;
    const end= page * resPerPage;
    member.slice(start, end).forEach(renderMember);

    // render pagination buttons
    renderButtons(page, member.length, resPerPage);
}; 