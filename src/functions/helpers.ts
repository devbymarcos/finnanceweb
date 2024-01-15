export function currencyFormatUI(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formattedDateView(date: string) {
  const dateFormatted = new Date(date);
  return dateFormatted.toLocaleDateString("pt-BR");
}
