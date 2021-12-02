function sum(a, b) {
  return a + b;
}


function div(num, denom) {
  let result;
  if ((typeof (num)=='number') &&( typeof(denom)=='number')) {
    if(denom!=0)
    {
    result = num / denom;
    }
    else
    {
      throw new Error("Denominator Should Not be Zero");
    }
  }
  else
  {
    throw new Error("it's Not a number");
  }


  return result;
}

function multiplication(num1, num2) {
  return num1 * num2;
}
module.exports.sum = sum;
module.exports.div = div;
module.exports.multiplication = multiplication;