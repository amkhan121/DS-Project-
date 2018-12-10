import axios from 'axios';
import {appId, appKey} from '../config';




export default class Departure{
    constructor(atcocode){ 
        this.atcocode = atcocode;
    }
 
    async getDeparture(){
        try{
            const res = await axios (`https://transportapi.com/v3/uk/bus/stop/${this.atcocode}/live.json?app_id=${appId}&app_key=${appKey}&group=no&nextbuses=yes`);
            //console.log(res);
            this.depart = res.data.departures.all; 
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

    // lineNo(){
    //     this.lineName = 'line_name';
        
    // }

    // parseDepartures(data) {
    //     const busNum = ['line_name', 'operator_name', 'aimed_departure_time', 'expected_departure_time', 'direction'];
    //     const busNumShort= ['line', 'operator', 'DepartAt','Expected At', 'Toward'];

        
    //      const newDepartures = data.map(el =>{
    //          //1) line/bus numbe capital 
    //          let departure = el.toLowerCase(); 
    //          busNum.forEach((unit, i) => {
    //             departure = departure.replace(unit, busNumShort[i]);
    //          });

    //          departure = departure.replace(/ *\([^)]*\) */g, ' ');

    //          const arrDepp = departure.split(' ');
    //          const unitIndex = arrDepp.findIndex(el2 => busNumShort.includes(el2)); 
    //         return departure;   

    //      });
    //      this.departures = newDepartures;
        
    // } 
    
};

