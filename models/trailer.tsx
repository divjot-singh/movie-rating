export interface TrailerDataInterface {
  link: string;
  linkEmbed: string;
  thumbNailUrl: string;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
}
export default class TrailerData {
  link: string;
  linkEmbed: string;
  thumbNailUrl: string;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  constructor(data: TrailerDataInterface) {
    this.link = data.link;
    this.linkEmbed = data.linkEmbed;
    this.thumbNailUrl = data.thumbNailUrl;
    this.videoId = data.videoId;
    this.videoTitle = data.videoTitle;
    this.videoDescription = data.videoDescription;
  }
}
