export function currencyFormatUI(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
// @return "DD/MM/YY"
export function formattedDateView(date: string) {
  const dateFormatted = new Date(date);
  return dateFormatted.toLocaleDateString("pt-BR");
}

export function formattedDateInput(dateString: string) {
  return dateString.split("T")[0];
}

export function jsonFormatterFormData(data: FormData) {
  let jsonObject: Record<string, any> = {};
  data.forEach(function (value, key) {
    jsonObject[key] = value;
  });
  return JSON.stringify(jsonObject);
}
