import { Film } from "./film";

export class FilmsInfo {
  films: Film[];
  totalCount: number;

  constructor(props) {
    Object.assign(this, props);
  }
}
