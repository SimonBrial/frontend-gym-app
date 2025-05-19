export const  separatesWords = (str: string): string =>{
    const palabrasConectoras = new Set([
      "en",
      "la",
      "su",
      "de",
      "y",
      "o",
      "a",
      "por",
      "con",
      "para",
      "el",
    ]);

    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Separa las palabras
      .split(" ") // Divide la cadena en palabras individuales
      .map((palabra, index) => {
        const palabraMinuscula = palabra.toLowerCase();
        return index === 0 || !palabrasConectoras.has(palabraMinuscula)
          ? palabra.charAt(0).toUpperCase() + palabra.slice(1)
          : palabraMinuscula;
      })
      .join(" "); // Une las palabras en un solo string
  }