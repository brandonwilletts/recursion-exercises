function fibs(length) {
  let output = [];
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      output[i] = 0;
    } else if (i > 0 && i <= 2) {
      output[i] = 1;
    } else {
      output[i] = output[i - 1] + output[i - 2];
    }
  }
  return output;
}

function fibsRec(length) {
  if (length === 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  } else {
    let value =
      fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3];
    return fibsRec(length - 1).concat(value);
  }
}
