let arr = [10, 9, -5, 23, 94]

function get_random(arr) {


return arr[Math.floor((Math.random()*arr.length))];

}

alert(get_random(arr));
