btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
firstInput = document.querySelector('[name="name"]');
secondInput = document.querySelector('[name="surname"]');

btnElement.addEventListener ("click" , function(){
   
    resultElement.textContent = `Здравствуйте, ${firstInput.value} ${secondInput.value}!`;
})