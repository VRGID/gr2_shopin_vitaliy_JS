let strings = [10, 9, -5, 23, 94, 10, 9, -5, 23, 94];

function get_uniq_arr(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

alert(get_uniq_arr(strings) );
