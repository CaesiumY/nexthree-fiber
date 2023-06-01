export const fromHexToRGB = (hex: string) => {
  const hexCode = hex.slice(1);
  const r = parseInt(hexCode.slice(0, 2), 16);
  const g = parseInt(hexCode.slice(2, 4), 16);
  const b = parseInt(hexCode.slice(4, 6), 16);

  return { r, g, b };
};

export const getContrastColor = (color: string) => {
  const { r, g, b } = fromHexToRGB(color);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
