// Assignment code here
  const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
  const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const numbers = '1234567890';
  const specialCharacters = '!@#$%^&*()';

  var lengthOfPassword;
  var includeCases; // Whatever we type in th alert box (l - lowercase, u - uppercase, n - numbers, s - special characters) will be stored as a string here.

function generatePassword() {
  alert('Hello there! You will now be prompted with certain question to ensure the password you require is generated for you.');
  lengthOfPassword = prompt('Please enter the length of the password. Minimum should be 8 and maximum can be till 128');
  while(parseInt(lengthOfPassword) < 8 || parseInt(lengthOfPassword) > 128) {
    lengthOfPassword = prompt('Please enter a valid length between 8 and 128');
  }
  includeCases = prompt('Please enter which one you would like to include in the password.You can simply enter the code in brackets in the alert.\nLowercase(l)\nUppercase(u)\nNumeric(n)\nSpecial Characters(s)');
  while(includeCases == undefined || includeCases == '') {
    includeCases = prompt('Please enter atleast one character set.\nLowercase(l)\nUppercase(u)\nNumeric(n)\nSpecial Characters(s)');
  }

  return computePassword();
}

function computePassword() {
  var passwordStr = '';
  let arrayForRandomization = []; 
  // This will include [0] - lowercase, [1] - uppercase, [2] - numerics, [3] - special characters.
  // We use the above array, create a random index and use it to get that respective random character.
  if(includeCases.includes('l')) {
    arrayForRandomization[0] = '1';
  }
  if(includeCases.includes('u')) {
    arrayForRandomization[1] = '1';
  }
  if(includeCases.includes('n')) {
    arrayForRandomization[2] = '1';
  }
  if(includeCases.includes('s')) {
    arrayForRandomization[3] = '1';
  }

  console.log(arrayForRandomization); // ['1',empty,'1','1'] {Sample}
  console.log(lengthOfPassword); // 9 {Sample}
  console.log(includeCases); // lns {Sample}
  var i=0;
  for(i = 0; i< lengthOfPassword; i++) {
    let indexRandom = Math.floor(Math.random() * (arrayForRandomization.length));
    //indexRandom will generate a number which is between 0 to 3. We can use this to randomly add a character on to the password to prevent same kind of pattern in random characters.
    //Example: If we normally generate a password without any randomization for position, we would get random digits but they follow same order.
    //Ex: dU4$ , wO7*, zA1! (All these look random but the order is same - lowercase, uppercase, number, special)
    //To prevent this kind of pattern, we randomize the positions as well.
      if(arrayForRandomization[indexRandom] == '1') {
        // It has the random character criteria present.
        if(indexRandom == 0) {
          let randomNo = Math.floor(Math.random() * lowerCase.length);
          passwordStr = passwordStr.concat(lowerCase.substring(randomNo, randomNo+1));
          console.log(randomNo + '<><>' + lowerCase.substring(randomNo, randomNo+1));
        }

        if(indexRandom == 1) {
          let randomNo = Math.floor(Math.random() * upperCase.length);
          passwordStr = passwordStr.concat(upperCase.substring(randomNo, randomNo+1));
          console.log(randomNo + '<><>' + upperCase.substring(randomNo, randomNo+1));
        }

        if(indexRandom == 2) {
          let randomNo = Math.floor(Math.random() * numbers.length);
          passwordStr = passwordStr.concat(numbers.substring(randomNo, randomNo+1));
          console.log(randomNo + '<><>' + numbers.substring(randomNo, randomNo+1));
        }

        if(indexRandom == 3) {
          let randomNo = Math.floor(Math.random() * specialCharacters.length);
          passwordStr = passwordStr.concat(specialCharacters.substring(randomNo, randomNo+1));
          console.log(randomNo + '<><>' + specialCharacters.substring(randomNo, randomNo+1));
        }

      } else {
        indexRandom = Math.floor(Math.random() * arrayForRandomization.length);
        i--;
      }
  }

  console.log(passwordStr);
  return passwordStr;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
