export const declNum = (number: number, titles: Array<string>) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return number > 1 ? titles[
    (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? Math.round(number % 10) : 5]
  ] : titles[0];
};