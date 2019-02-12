export class Comment {
  filmId: number;
  userId: string;
  message: string;
  date: string;
  userName: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
