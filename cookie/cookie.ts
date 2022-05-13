export function saveCookie(type: string, value: string): void {
	let updatedCookie: string = type + "=" + encodeURIComponent(value);
	document.cookie = updatedCookie;
}


export function getCookie(name: string): string {
	let matches: RegExpMatchArray = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}