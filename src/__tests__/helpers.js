/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const ut = require('../helpers');

test('increment bertambah 1', () => {
    expect(ut.incrementQty(1)).toBe(2);
});

test('increment parameter string tetap bertambah 1', () => {
    expect(ut.incrementQty('1')).toBe(2);
});

test('decrement berkurang 1', () => {
    expect(ut.decrementQty(1)).toBe(1);
});

test('decrement parameter string tetap berkurang 1', () => {
    expect(ut.decrementQty('1')).toBe(1);
});

test('Hitung subtotal, price 5000 qty 5', () => {
    expect(ut.mulPriceQty(5000, 5)).toBe(25000);
});

test('Hitung subtotal (string), price 5000 qty 5', () => {
    expect(ut.mulPriceQty('5000', '5')).toBe(25000);
});

test('kode promo 10PERSEN, potongan harga 10 persen', () => {
    expect(ut.discount('10PERSEN', 10000, 5)).toBe(45000);
});

test('kode promo salah, tidak ada potongan harga', () => {
    expect(ut.discount('', 10000, 5)).toBe(50000);
});