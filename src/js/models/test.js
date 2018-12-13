import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getRest(){
        //const queryy = 'paisley';
    

        const ressf = await axios(`https://transit.api.here.com/v3/route.json?dep=55.86515%2C%20-4.25763&arr=55.83173%2C%20-4.43254&time=2018-12-12T07%3A30%3A00&app_id=0twBwiRWvDxoU0aHxNAn&app_code=hrSk1Iq7sjdzCb2-fTIQ6g&routing=tt`); 
        
        console.log(ressf);
        
    // console.log(this.member); 
    
  }
}  