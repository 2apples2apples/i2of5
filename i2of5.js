const input = document.getElementById("upcInput");
const submitButton = document.getElementById("submitButton");
const packSize = document.getElementById("pack-size-selector");

submitButton.addEventListener("click", () => {
  const inputValue = input.value;
  const packSizeValue = packSize.value;
  if (inputValue.length < 12 || inputValue.length > 12) {
    console.log("Not a valid format");
  } else {
    const initUpc = inputValue.split("");
    const upc = initUpc.map(Number);
    console.log(upc);

    upc.splice(0, 0, Number(packSizeValue), Number(0));

    const stepOne =
      upc[0] + upc[2] + upc[4] + upc[6] + upc[8] + upc[10] + upc[12];
    const stepTwo = stepOne * 3;
    const stepThree = upc[1] + upc[3] + upc[5] + upc[7] + upc[9] + upc[11];
    const stepFour = stepTwo + stepThree;
    const lastDigit = 10 - (stepFour % 10);
    upc.splice(13, 1, Number(lastDigit));
    const i2of5 = Number(upc.join(""));
    console.log(lastDigit);

    console.log(stepOne);
    console.log(stepTwo);
    console.log(stepThree);
    console.log(stepFour);
    console.log(upc);
    console.log(i2of5);
  }
});
//test upc 72716589453634
