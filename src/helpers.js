const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if (qty > 1) {
        return parseInt(qty - 1);
    } else {
        return 1;
    }
};
const mulPriceQty = (price, qty) => parseInt(price) * parseInt(qty);
const discount = (kode, price, qty) => {
    if (kode === "10PERSEN") {
        return mulPriceQty(price, qty) - mulPriceQty(price, qty) * 0.1;
    } else {
        return mulPriceQty(price, qty);
    }
}


module.exports = {
    incrementQty,
    decrementQty,
    mulPriceQty,
    discount
};
