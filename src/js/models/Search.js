import axios from 'axios';
import {appId, appKey} from '../config';


export default class Search{
    constructor(query){
        this.query = query;
    }
    

    async getResults(query) {
        //const queryy = 'paisley';
       
        try{
        const res = await axios(`https://transportapi.com/v3/uk/places.json?app_id=${appId}&app_key=${appKey}&query=${this.query}&type=bus_stop`); 
        this.member = res.data.member; 
          
       // console.log(this.member); 
        }catch(error){
            alert(error);
        }
    }
}