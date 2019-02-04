const phoneNumberCheck = function (number) {
  number = number.replace(/\D/g,'');
  if (number.length === 11 && number[0] === "1") {
    number = number.slice(1);
  } else if (number.length !== 10) {
    return "00000000";
  }
  const output = ["(", number.slice(0, 3), ") ", number.slice(3, 6), "-", number.slice(6),].join("");
  return output;
}
