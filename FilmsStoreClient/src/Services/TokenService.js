export default class TokenService {
    static setToken(token) {
        window.sessionStorage.setItem("Token", token);
    }
    static getToken() {
        return window.sessionStorage.getItem("Token");
    }
    static removeToken() {
        return window.sessionStorage.removeItem("Token");
    }
    static isSetToken() {
        return window.sessionStorage.getItem("Token") ? true : false;
    }
}