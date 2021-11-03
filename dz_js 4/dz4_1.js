let get_min = [5, 2, 1, -10, 8];

get_min.sort((a, b) => a - b);
let result = get_min.shift((a, b) => a - b);

alert(result);

console.log(result);
