export class Film {
  filmId: number;
  name: string;
  country: string;
  year: number;
  genre: string;
  producer: string;
  rating: number;
  imageUrl: string;
  videoUrl: string;
  description: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
