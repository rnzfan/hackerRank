function minimumBribes(q) {
    let numBribes = 0;
    const bribedQueue = q.slice();
    const dynQueue = q.sort((a,b)=>(a-b));

    for (let i=0; i<bribedQueue.length; i++) {
        
        const bribedguy = bribedQueue[i];
        const diff = dynQueue.indexOf(bribedguy) - bribedQueue.indexOf(bribedguy);
        if (diff == 0) continue;
        if (diff == 1) {
            numBribes = numBribes + 1;
            //[dynQueue[i], dynQueue[i+1]] = [dynQueue[i+1], dynQueue[i]];
            const tmp = dynQueue[i];
            dynQueue[i] = dynQueue[i+1];
            dynQueue[i+1] = tmp; 

        } else if (diff == 2) {
            numBribes = numBribes + 2;
            
            //[dynQueue[i], dynQueue[i+2]] = [dynQueue[i+2], dynQueue[i]];
            //[dynQueue[i+1], dynQueue[i+2]] = [dynQueue[i+2], dynQueue[i+1]];
            const tmp = dynQueue[i+2];
            dynQueue[i+2] = dynQueue[i+1];
            dynQueue[i+1] = dynQueue[i];
            dynQueue[i] = tmp;
        } else {
            console.log("Too chaotic");
            return;
        }
    }

    console.log(numBribes);

}

let q = [1, 2, 5, 3, 7, 8, 6, 4];


minimumBribes(q);

