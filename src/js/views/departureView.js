 import {elements} from './base';


 
 

 export const clearDeparture = ()=>{
     elements.departRes.innerHTML ='';
 };
// ${dep.operator},${dep.line},${dep.dir},${dep.id}
 export const renderDepart = dep=>{
    const markup= ` 
 
    
        <li>
            <a class="results__link" href="#${dep.id}"> 
                 
                <div class="results__data">
                    
                 <h4 class="results__name"> ${dep.aimed_departure_time}</h4> <p class="results__author">${dep.operator}, To: ${dep.direction} <h4 class="results__name"> ${dep.line_name}</h4></p> 
                    
                </div>
            </a>
        </li>
                    
    
    `;
    elements.departRes.insertAdjacentHTML('beforeend', markup);

} ;

// export const getoperator =() => dep.operator;
//  console.log(getoperator);
//  export const getline =() => dep.line;
//  export const getdir =() => dep.dir;
//  export const getatcocode =() => dep.atcocode;


 
export const renderD = (depart) => {
    //console.log(depart);
    depart.forEach(renderDepart);

   
}; 


                  