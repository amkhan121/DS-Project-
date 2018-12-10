import axios from 'axios';
import {appId, appKey} from '../config';



export default class Route{
    constructor(operator, line, dir, atcocode){
       this.operator = operator;
        this.line = line;
        this.dir = dir;  
        
             this.atcocode = atcocode;
        // this.data = data; 
        // this.time = time;
    }
  
    async getRoutes(){
        try{            
            const rest = await axios(`https://transportapi.com/v3/uk/bus/route/${this.operator}/${this.line}/${this.dir}/${this.atcocode}///timetable.json?app_id=${appId}&app_key=${appKey}&edge_geometry=false`);
            // const rot = rest.data;  
            // console.log(rot);
        

            //   this.line = rest.data.line;
            //   this.dir = rest.data.dir; 
            //   this.operator = rest.data.operator; 
            //   this.atcocode = rest.data.atcocode;        
              this.allstops = rest.data.stops;
           //   console.log(this.allstops);
            // this.operator= routes.operator;
            // this.line = routes.line; 
            // this.dir = routes.dir;
            // this.atcocode = routes.atcocode;
            //console.log(this.operator+this.line+ this.dir+this.atcocode);
            
            //console.log(rest.data.stops);
            //console.log(stopss);
          
              
        }catch(error){
            console.log(error);
            alert('Somethins went wrong to get route  :(');
        }
    };
    
    // get route with change details 
    // routeDetails(line,operator, dir, atcocode){
    //     this.line = line;
    //     this.operator = operator;
    //     this.dir = dir;
    //     this.atcocode = atcocode;
       
    // }

};
