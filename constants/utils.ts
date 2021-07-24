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
export const getVoteCountSuffix = (votes: string) => {
  switch (votes.length) {
    case 4:
      return votes.substr(0, 1) + "K";
    case 5:
      return votes.substr(0, 2) + "K";
    case 6:
      return votes.substr(0, 3) + "K";
    case 7:
      return votes.substr(0, 1) + "M";
    case 8:
      return votes.substr(0, 2) + "M";
    case 9:
      return votes.substr(0, 3) + "M";
    case 10:
      return votes.substr(0, 1) + "B";
    case 11:
      return votes.substr(0, 2) + "B";
    case 12:
      return votes.substr(0, 3) + "B";

    default:
      return votes;
  }
};
