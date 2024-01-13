function getShippingMessage (country, price, deliveryFee){
    //створюю сталу ціни на товар і доставку.
const totalPrice = price + deliveryFee;
//створюю повернення повідомлення з даними про замовлення
return `Shipping to ${country} will cost ${totalPrice} credits`;

}

const shippingMessage = getShippingMessage("Dnipro", 450, 50);
console.log(shippingMessage);


console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"