import {elements} from './base';




export const renderR = rot=>{
    const markup= ` 
 
    
        <li>
            <a class="results__link" href="#${rot.atcocode}"> 
                 
                <div class="results__data">
                    
                 <h4 class="results__name"> ${rot.time}</h4> <p class="results__author">${rot.stop_name}, To: ${rot.locality} <h4 class="results__name"> ${rot.indicator}</h4></p> 
                    
                </div>
            </a>
        </li>
                    
    
    `;
    elements.departRes.insertAdjacentHTML('beforeend', markup);

} ;

export const renderRoure = (allstops) => {
    console.log(allstops);
    allstops.forEach(renderR);

   
}; 