import Search from './models/Search';
import Departure from './models/Departure';
import Route from './models/Route';
import * as searchView from './views/searchView';
import * as departureView from './views/departureView';
import {elements, renderLoader, clearLoader} from './views/base';



/** Global state of the app
 * - Search object
 * - Live departure object
 * - Line with all bus stop object
 * - Save journey object 
*/
const state = {};

/**
 * Search Controllar  
 */

const controlSearch = async() =>{
    //1) Get the query from the view
   const query = searchView.getInput();
   
   //console.log(query);


    if (query){
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try{  
        // 4) Search for Bus Stops
                await state.search.getResults();

                // 5) Render results on UI
                clearLoader();
                searchView.renderResults(state.search.member);
                //console.log(state.search);
        }catch(err){
            alert('somethin wron with process control');
            clearLoader();
        }
        
    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();

}); 


elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.member, goToPage);
    }
});

/**
 * Departure Controllar 
 */


const controlDeparture = async() =>{
    //Get the id from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id){
        //Prepare UI for changes
       departureView.clearDeparture();
       renderLoader(elements.departureRender);

        //Create  new departure object
        state.departure = new Departure(id);
        
       
      try{
        //Get departure data
       await state.departure.getDeparture();

      
       //state.departure.parseDepartures();

        //bus time table and live depart 
        //state.departure.lineNo(); 

        //Render depature 
       clearLoader();
       departureView.renderD(state.departure.depart);
     
        
       //console.log(state.departure.depart);
      } catch (err) {
           alert('Error processing Departure!');
           
      }
    }
  

};

    //window.addEventListener('hashchange', controlDeparture);
    //window.addEventListener('load', controlDeparture);

    ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlDeparture));

    /**
     * Route Controllar 
     */
    // const r = new Route('MCG', 38, 'outbound', 6140565);
    // r.getRoutes();   
    // console.log(r); 

const controlRoute = async() =>{

    
    //const line = window.location.hash.replace('#', '');
    const operator = 
    
    console.log(line);

    if (line){
        state.route = new Route(line);
        // this.operator = operator;
        // this.line = line;
        // this.dir = dir;  
        // this.atcocode = atcocode;

        await state.route.getRoutes();

        console.log(state.route);

    }
};
window.addEventListener('hashchange', controlRoute);