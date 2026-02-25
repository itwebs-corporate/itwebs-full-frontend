export function formattedPrice(number: number) {
  return new Intl.NumberFormat('ru-RU').format(number);
}
