import { UI_ELEMENTS } from "../UI_ELEMENTS/view.js";
export {
	getInputToken,
	timeConverter,
	showNotice,
};


function getInputToken(): string {
	let inputToken: string = UI_ELEMENTS.INPUT_CONFIRMATION.value;
	UI_ELEMENTS.INPUT_CONFIRMATION.value = '';
	return inputToken;
}


function showNotice(text: string, color: string): void {
	UI_ELEMENTS.NOTICE_BLOCK.style.display = 'flex';
	UI_ELEMENTS.NOTICE_TEXT.textContent = text;
	UI_ELEMENTS.NOTICE_TEXT.style.color = color;
}


function timeConverter(time: number = Date.now()): string {
	const date: Date = new Date(time);

	let hour: string = String(date.getHours());
	if (hour.length === 1) {
		hour = 0 + hour;
	}
	let minute: string = String(date.getMinutes());
	if (minute.length === 1) {
		minute = 0 + minute;
	}
	return `${hour}:${minute}`;
}

