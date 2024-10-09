import { currency } from "remask";

export function maskUiFormTransaction(value: string) {
  const originalValue = currency.unmask({
    locale: "pt-BR",
    currency: "BRL",
    value: value,
  });
  const maskedValue = currency.mask({
    locale: "pt-BR",
    currency: "BRL",
    value: originalValue,
  });
  return maskedValue;
}
