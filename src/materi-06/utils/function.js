export const totalPrice = (cart) => {
    return cart.reduce((sum, item) => {
        const price = parseInt((item.discountprice == "0" ? item.price : item.discountprice).replace(/[^\d]/g, "")) || 0;
        return sum + price * item.quantity;
    }, 0);
}