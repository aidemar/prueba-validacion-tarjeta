/*const button = document.getElementById("button");

const form = document.querySelector("form");

 

 

// console.log(form);

const sendInformation = e => {

  e.preventDefault();

  console.log(button);

  if (validateCardDetails(form)) {

    console.log("datos válido... enviar...");

  } else {

    console.log("datos inválidos");

  }

};

 

button.addEventListener("click", sendInformation);
*/


// Validar cvv

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});


 

function validateCardDetails(element) {

  // console.log(array[2].value);

  let array = Array.from(element)

  let numberCard = (array[0].value);

  console.log(numberCard);
  let cvv = parseInt(array[2].value);

  ccvVerification(cvv);
  validateCreditCardNumber(numberCard);


}


//validateCardDetails(form);

//form = "<form><iput>..."


function ccvVerification(cvv) {

  //cvv="<form><iput>..."
  let inputborder = document.getElementById("cvv");

  if(cvv != "" && cvv >= 100 && cvv <= 999 && typeof cvv == "number"){
    
    /*console.log("válido");*/
    inputborder.classList.add("vaLidation");

  } else {

  /*  console.log("invalido");*/
    inputborder.classList.add("error");

  }

}

// Validar número de la tarjeta 

// numberCard != ""
// && 

//Funcion uno para validar que sean 16 números
function validLenghtCardNumber(item) {
  if(item.trim().length === 16){
    return item;
  }
}


/* function textLength(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }*/
function validateCreditCardNumber(numberCard) {
  if(numberCard.length === 16){
    console.log("válido");
  }else {
    console.log("invalido");

  }
}





/*  function isValidCreditCard(numberCard) {
    var creditCardNumber = onlyNumbers(textLength(numberCard));
    if (creditCardNumber !== undefined) {
      var arr = [];
      var sumaTotal = 0;
      for (var index = creditCardNumber.length - 1; index >= 0; index--) {
        arr.push(creditCardNumber[index]);
      }
      for (var index = 1; index < arr.length; index = index + 2) {
        arr[index] = arr[index] * 2;
        if (arr[index] >= 10) {
          arr[index] = arr[index] - 9;
        }    
      }
     
      for (var index = 0; index < arr.length; index++) {
        sumaTotal = sumaTotal + parseInt(arr[index]);
      }
     
      if (sumaTotal % 10 === 0) {
        console.log('Es una tarjeta valida');
        activeButton();
      } else {
        console.log('No es un numero valido');
        desactiveButton();
      }
    } else {
      console.log('Verifique el numero de su tarjeta'); 
      desactiveButton();  
    }
  }
});*/

/*
if var.length == 2

  //var = "01"

  var = var + '/'

 */