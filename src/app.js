import {
  incrementQty,
  decrementQty,
  mulPriceQty,
  discount
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const promoInput = document.querySelector('#code');
const confirmBtn = document.querySelector('#confirmButton');

// Calculation
subTotal.innerHTML = "Rp. " + mulPriceQty(priceInput.value, qtyInput.value);

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.innerHTML = "Rp. " + mulPriceQty(priceInput.value, qtyInput.value);

});
decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.innerHTML = "Rp. " + mulPriceQty(priceInput.value, qtyInput.value);
});
confirmBtn.addEventListener('click', () => {
  subTotal.innerHTML = "Rp. " + discount(promoInput.value, priceInput.value, qtyInput.value);
})

// DOM force negative input value to positive
qtyInput.addEventListener('change', () => {
  if (qtyInput.value < 0) {
    qtyInput.value = qtyInput.value * -1;
  }
});
priceInput.addEventListener('change', () => {
  if (priceInput.value < 0) {
    priceInput.value = priceInput.value * -1;
  }
});

// DOM FORCE INPUT TO NUMERIC
priceInput.addEventListener('input', () => {
  priceInput.value = priceInput.value.replace(/[^0-9]/g, '');
});
qtyInput.addEventListener('input', () => {
  qtyInput.value = qtyInput.value.replace(/[^0-9]/g, '');
});
