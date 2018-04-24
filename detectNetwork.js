// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  var prefix = cardNumber.slice(0, 6);
  var numLength = cardNumber.length;

    switch (true) {
    case (prefix.startsWith("38") || prefix.startsWith("39")) && (numLength === 14):
      return "Diner's Club";
    case (prefix.startsWith("34") || prefix.startsWith("37")) && (numLength === 15):
      return "American Express";
    case (prefix.startsWith("51") || prefix.startsWith("52") || prefix.startsWith("53") ||
          prefix.startsWith("54") || prefix.startsWith("55")) && (numLength === 16):
      return "MasterCard";
    case (prefix.startsWith("6011") || prefix.startsWith("644") || prefix.startsWith("645") ||
          prefix.startsWith("646") || prefix.startsWith("647") || prefix.startsWith("648") ||
          prefix.startsWith("649") || prefix.startsWith("65")) && (numLength === 16 || numLength === 19):
      return "Discover";
    case (prefix.startsWith("5018") || prefix.startsWith("5020") || prefix.startsWith("5038") ||
          prefix.startsWith("6304")) && (numLength >= 12 && numLength <= 19):
      return "Maestro";
    case ((prefix >= 622126 && prefix <= 622925) || prefix.startsWith("624") || prefix.startsWith("625") ||
           prefix.startsWith("626") || prefix.startsWith("6282") || prefix.startsWith("6283") ||
           prefix.startsWith("6284") || prefix.startsWith("6285") || prefix.startsWith("6286") ||
           prefix.startsWith("6287") || prefix.startsWith("6288")) && (numLength >= 16 && numLength <= 19):
      return "China UnionPay";
    case (prefix.startsWith("4903") || prefix.startsWith("4905") || prefix.startsWith("4911") ||prefix.startsWith("4936") || prefix.startsWith("564182") || prefix.startsWith("633110") ||
          prefix.startsWith("6333") || prefix.startsWith("6759")) && (numLength === 16 || numLength === 18 ||
          numLength === 19):
      return "Switch";
    case (prefix[0] === "4") && (numLength === 16 || numLength === 19 || numLength === 13):
      return "Visa";
    default:
      break;
    }
};
console.log(detectNetwork('4911123456789123459'));





