export const elements = {
    searchForm: document.querySelector('.search'), 
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    departRes: document.querySelector('.depart__list'),
    departureRender: document.querySelector('.depart'),
    routeRender: document.querySelector('.route')
 
};

export const elementStrings = {
    loader: 'loader'
};



export const renderLoader = perent => {
    const loader =`
        <div class="${elementStrings.loader}">
           <svg>
            <use href="img/icons.svg#icon-cw"></use>
           </svg> 
        </div>
    `;
      
    perent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = ()=>{
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};