import axios from 'axios';
import {appId, appKey} from '../config';




export default class Departure{
    constructor(atcocode){ 
        this.atcocode = atcocode;
    }
 
    async getDeparture(){
        try{
            const resd = await axios(`https://transportapi.com/v3/uk/bus/stop/${this.atcocode}/live.json?app_id=${appId}&app_key=${appKey}&group=no&nextbuses=yes`);
            //console.log(resd);
            
            //this.atcocode = resd.data.atcocode;
            //console.log(this.atcocode+"haleo");
            this.depart = resd.data.departures.all; 
            //console.log(this.depart);
           
            // const depart = res.data.departures.all;
            
            //       depart.forEach(r=>{
            //         this.bestTime = r.best_departure_estimate;
            //         this.direction = r.direction;
            //         this.operator = r.operator;
            //         this.name = r.line_name;
            //         this.id = r.id;
            //       //this.arriveAT = r.aimed_departure_time;
                    
            //         //console.log(this.bestTime+ ' toward: ' +this.direction+', ' +this.operator+ ', ' +this.name);
            //         //return r.mode;
            //     })
              
        }catch(error){
            console.log(error);
            alert('Somethins went wrong :(');
        }
    };

    
    
};

