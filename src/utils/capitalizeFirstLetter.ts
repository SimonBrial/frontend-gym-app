export function capitalizeFirstLetter(str: string): string {
  const articles = [
    "el",
    "la",
    "los",
    "las",
    "un",
    "una",
    "unos",
    "unas",
    "al",
    "del",
    "de",
  ];
  return str
    .split(" ")
    .map((word) => {
      return articles.includes(word.toLowerCase())
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
