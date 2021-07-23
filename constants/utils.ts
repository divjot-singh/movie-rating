export const DELAY = (mls: number, callback?: Function) => {
  if (callback) {
    setTimeout(callback, mls);
  }
  return new Promise((resolve) => setTimeout(resolve, mls));
};
const getImageId = (url: string) => {
  const urlParts: string[] = url.split("/"),
    imageId = urlParts[urlParts.length - 1];
  return imageId;
};
const getImageExtension = (url: string) => {
  const urlParts: string[] = url.split("."),
    extension = urlParts[urlParts.length - 1];
  return extension;
};
export const getProperImageUrl = (url: string) => {
  if (url.includes("imdb-api.com")) {
    return `https://m.media-amazon.com/images/M/${getImageId(
      url
    )}@._V1_Ratio1.${getImageExtension(url)}`;
  } else {
    const urlParts: string[] = url.split("@._");
    return `${urlParts[0]}@._V1_Ratio1.${getImageExtension(url)}`;
  }
};
