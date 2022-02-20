function minimumBribesv2(q) {
    for (let i=q.length-1; i>=0; i--) {
        if (q[i]-(i+1)>2) {
            console.log("Too chaotic");
            return;
        }
    }
    let numBribes = 0;
    for (let i=q.length-1; i>0; i--) {
        if (i>=1 && q[i-1]==i+1) {
            numBribes++;
            [q[i-1], q[i]] = [q[i], q[i-1]];
            //const tmp = q[i-1];
            //q[i-1] = q[i];
            //q[i] = tmp;
        } else if (i>=2 && q[i-2]==i+1) {
            numBribes = numBribes +2;
            [q[i-2], q[i-1]] = [q[i-1], q[i-2]];
            [q[i-1], q[i]] = [q[i], q[i-1]];
            //const tmp = q[i-2];
            //q[i-2] = q[i-1];
            //q[i-1] = q[i];
            //q[i] = tmp;
        }
    }
    console.log(numBribes);
}

let q = [2, 1, 5, 3, 4];
minimumBribesv2(q);