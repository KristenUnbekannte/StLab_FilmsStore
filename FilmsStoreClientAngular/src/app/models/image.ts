export class Image {
  imageId: number;
  url: string;
  filmId: number;

  constructor(props) {
    Object.assign(this, props);
  }
}
