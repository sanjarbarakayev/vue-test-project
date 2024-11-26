export const formatMoneyDecimal = (number, fix = 0, option = "decimal") => {
  let style;
  if (["USD", "RUB"].includes(option)) {
    style = "currency";
  } else if (["kilogram", "meter", "percent"].includes(option)) {
    style = "unit";
  } else {
    style = "";
  }

  const newStyle = style;
  const option2 = {
    newStyle, //  unit currency percent decimal
    [newStyle]: option,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix,
  };
  return number ? new Intl.NumberFormat("ru-RU", option2).format(number) : "0";
};