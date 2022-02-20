function sortString(s) {
    let array = s.split("");
    array.sort();
    return array.join("");
}

function gridChallenge(grid) {

    let n = grid.length;
    let m = grid[0].length;
    for (let i=0; i<n; i++) {
        grid[i] = sortString(grid[i]);
    }
    console.log(grid);
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<m; j++) {
            if (grid[i][j] > grid[i+1][j]) {
                return 'NO';
            }
        }
    }
    return 'YES';

}

let grid1 = ['kc', 'iu'];
let grid2 = ['uxf', 'vof', 'hmp'];

console.log(gridChallenge(grid1));
console.log(gridChallenge(grid2));
