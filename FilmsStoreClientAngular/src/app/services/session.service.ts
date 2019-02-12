import { Injectable } from "@angular/core";

@Injectable()
export class SessionService {
  setItem(type: string, value: string): void {
    sessionStorage.setItem(type, value);
  }

  setItems(object: object): void {
    Object.keys(object).forEach(key => {
      sessionStorage.setItem(key, object[key]);
    });
  }

  getItem(type: string): string {
    return sessionStorage.getItem(type);
  }

  removeItem(type: string): void {
    window.sessionStorage.removeItem(type);
  }
  removeAllItems(): void {
    sessionStorage.clear();
  }
}
