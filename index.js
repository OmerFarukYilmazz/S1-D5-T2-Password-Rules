function resetNeeded(arrPassword) {
  /* kodlar buraya */
  if (arrPassword.length < 1) {
    return [];
  }

  let array = new Array();
  //let boolUpperLower = false;

  for (let i = 0; i < arrPassword.length; i++) {
    if (
      arrPassword[i].length < 8 ||
      !/[A-Z]/.test(arrPassword[i]) ||
      !/[a-z]/.test(arrPassword[i])
    ) {
      array.push(arrPassword[i]);
    }
    /*
    if (!/[A-Z]/.test(arrPassword[i]) || !/[a-z]/.test(arrPassword[i])) {
      array.push(arrPassword[i]);
    }*/
  }
  return array;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = resetNeeded;
