import { getCookie } from "../cookie/cookie.js";
import { UI_ELEMENTS } from "../UI_ELEMENTS/view.js";


export function getInputMessage(): string {
	let inputMessage: string = UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value;
	UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value = '';
	return inputMessage;
}


export function sendMessage(messageText: string, messageDate: string, messageName: string, messageEmail: string): void {
	const TEMPLATE: HTMLTemplateElement = (messageEmail === getCookie("Email")) ? document.querySelector('#tmpl') : document.querySelector('#tmp2');
	const templateName = TEMPLATE.content.querySelector('.userNoSelect');
	const templateText = TEMPLATE.content.querySelector('.dialog__message-text');
	const templateDate = TEMPLATE.content.querySelector('.dialog__message-time');

	templateName.textContent = messageName + ': ';
	templateText.textContent = messageText;
	templateDate.textContent = messageDate;

	UI_ELEMENTS.DIALOG_LIST.append(TEMPLATE.content.cloneNode(true));
	showNewMessage();
}


function showNewMessage(): void {
	const newMessage: HTMLLIElement = document.querySelector('ul > li:last-child')
	if (newMessage.classList.contains('dialog__personal_message')) newMessage.scrollIntoView({ block: "center", behavior: "smooth" });
	if (newMessage.classList.contains('dialog__someone_message')) {
		newMessage.style.background = '#ECC781';
		setTimeout(() => {
			newMessage.style.background = '#fff';
		}, 5000);
	}
}