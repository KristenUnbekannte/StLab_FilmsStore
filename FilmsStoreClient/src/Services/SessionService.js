export default class SessionService {
	static setItem(type, value) {
		window.sessionStorage.setItem(type, value);
	}
	static setItems(object) {
		Object.keys(object).forEach(key => {
			window.sessionStorage.setItem(key, object[key]);
		});
	}
	static getItem(type) {
		return window.sessionStorage.getItem(type);
	}
	static removeItem(type) {
		return window.sessionStorage.removeItem(type);
	}
	static isSetItem(type) {
		return window.sessionStorage.getItem(type) ? true : false;
	}
	static removeAllItems() {
		window.sessionStorage.clear();
	}
}
