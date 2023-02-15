// D = (L-S)/L *100


// a+(b*(c/d))*e


var sellingPrice=199;
var listingPrice=799;

var discountPercentage =((listingPrice-sellingPrice)/listingPrice) *100;
console.log("Discount percentage is:"+discountPercentage);

var displayDiscountPercentage =Math.round(discountPercentage);
console.log(displayDiscountPercentage+"% off");


var result =listingPrice>sellingPrice;
console.log(typeof result);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence