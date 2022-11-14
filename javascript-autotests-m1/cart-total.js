function calculate (priceBasket, goodsBasket, promo = null) {

    if (promo == 'ДАРИМ300' && priceBasket <= 300) {
      priceBasket = 0;
      console.log('Использован промокод ДАРИМ300 ' + priceBasket);
    } else if (promo == 'ДАРИМ300') {
      priceBasket -= 300;
      console.log('Использован промокод ДАРИМ300 ' + priceBasket);
    }
    if (goodsBasket >= 10) {
      const countFiveProcent = priceBasket/100*5;
      priceBasket -= countFiveProcent;
      console.log('В корзине больше 10 товаров. Скидка 5% ' + priceBasket);
    }
    if (priceBasket > 50000) {
      const countDifference = priceBasket - 50000;
      const discount = countDifference * 0.2;
      priceBasket -= discount;
      console.log('Сумма заказа больше 50 000 ₽. Скидка 20% ' + priceBasket);
    }
    if (promo == 'СКИДКА15' && priceBasket >= 20000) {
      const countFifteenProcent = priceBasket/100*15;
      priceBasket -= countFifteenProcent;
      console.log('Использован промокод СКИДКА15 ' + priceBasket);
    }
    return priceBasket
  }

/*   console.log('Итоговая стоимость ' + priceBasket);
 */
calculate(55000, 100, 'СКИДКА15');

export default calculate;
