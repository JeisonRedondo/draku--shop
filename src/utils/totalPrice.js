/**
 * This function calculates total price of a new order
 * @param {Array} productsArray cartProducts: Array of Objects
 * @returns {Number} Total price 
 */
export const totalPrice = (productsArray) => {
    
    const total = productsArray.reduce((acc,product) => {
        const semiTotal = product.price*product.quantity;
      return  acc + semiTotal; 
    },0);

    return parseFloat(total.toFixed(1));
};