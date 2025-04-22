let slider = document.getElementById("slider");
let lengthDisplay = document.getElementById("length");
let generateBtn = document.getElementById("generate");
let length = document.getElementById("char-count");


generateBtn.addEventListener("click", function () {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    let length = slider.value;
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    lengthDisplay.value = password; // عرض الباسورد في الحقل
  });

  slider.addEventListener("input", function () {length.textContent = "Length: " + slider.value;

  
  });
  
  
