function truckTour(petrolpumps) {
    
    for (let i=0; i<petrolpumps.length; i++) {
        let petrol = 0;
        let count = 0;
        if (petrolpumps[i][0] < petrolpumps[i][1]) continue;

        for (let j=i; j<petrolpumps.length+i; j++) {
            petrol = petrol + petrolpumps[(j%petrolpumps.length)][0] - petrolpumps[(j%petrolpumps.length)][1];
            if (petrol < 0) {
                break;
            }
            count++;
        }
        if (count == petrolpumps.length) {
            return i;
        }
        
    }

}


let petrolpumps = [[5,4], [2,5], [9,3], [4,4]];

console.log(truckTour(petrolpumps));