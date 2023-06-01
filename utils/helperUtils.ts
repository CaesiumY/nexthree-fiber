export const readFile = (file: Blob): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string);
  });

export const downloadCanvasToImage = (name = "canvas") => {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = `${name}.png`;
  link.click();
};
