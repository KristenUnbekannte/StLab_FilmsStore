export class AccountInfo {
  token: number;
  userName: string;
  role: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
