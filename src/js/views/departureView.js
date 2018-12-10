 import {elements} from './base';


 export const clearDeparture = ()=>{
     elements.departRes.innerHTML ='';
 };

 export const renderDepart = dep=>{
    const markup= ` 
 
    
        <li>
            <a class="results__link" href="#${dep.operator}${dep.line}${dep.dir}"> 
                 
                <div class="results__data">
                    
                 <h4 class="results__name"> ${dep.aimed_departure_time}</h4> <p class="results__author">${dep.operator}, To: ${dep.direction} <h4 class="results__name"> ${dep.line_name}</h4></p> 
                    
                </div>
            </a>
        </li>
                    
    
    `;
    elements.departRes.insertAdjacentHTML('beforeend', markup);
} ;

 
export const renderD = (depart) => {
    //console.log(depart);
    depart.forEach(renderDepart);

   
}; 

// const createDeparttt = depp => `

//             <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">${depp.line_name}</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit">${depp.mode}</span>
//                 pasta
//             </div>
//             </li>

// `;

// export const renderDparture = dep => {
// const markup= `
//             <div class="recipe__ingredients">
//                 <ul class="recipe__ingredient-list">
    
//     ${departure.depart.map(el=>createDeparttt(el)).join('')} 
    
//     </ul>
//     </div>
// `;
// elements.departRes.insertAdjacentHTML('afterbegin', markup);
// }


                  