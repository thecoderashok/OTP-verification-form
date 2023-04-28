const OTPinputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load", () => OTPinputs[0].focus());

OTPinputs.forEach((input) => {
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;

    if (currentInput.value.length > 1 && currentInput.value.length == 2 ) {
      currentInput.value = "";
    }

    if (nextInput !== null && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    
    if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
      button.classList.add("active");
    }else{
      button.classList.remove("active");
    }
    
  });


  input.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        if(input.previousElementSibling !== null){
          e.target.value = "";
          e.target.setAttribute("disabled", true);
          input.previousElementSibling.focus();
        }
      }
  })

});

button.addEventListener("click", () => {
  alert("OTP Sent")
})


