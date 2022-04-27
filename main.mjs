import { UI_ELEMENTS, API_DATA } from "./view.mjs";

UI_ELEMENTS.BTN_DIALOD.addEventListener('submit', () => {
	if(UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value) sendMessage(getInputMessage()); 
})

UI_ELEMENTS.BTN_AUTHORIZATION.addEventListener('click', () => {
	if(UI_ELEMENTS.INPUT_AUTHORIZATION.value){
		UI_ELEMENTS.AUTHORIZATION_BLOCK.style.display = 'none';
		UI_ELEMENTS.CONFIRMATION_BLOCK.style.display = 'flex';
		sendAuthorizationCode();
	}
});

function getInputMessage() {
	let inputMessage = UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value;
	UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value = '';
	return inputMessage;
}

function getInputEmail() {
	let inputEmail = UI_ELEMENTS.INPUT_AUTHORIZATION.value;
	UI_ELEMENTS.INPUT_AUTHORIZATION.value = '';
	return inputEmail;
}

function sendMessage(messageText) {
	const TEMPLATE = document.querySelector('#tmpl');
	const templateText = TEMPLATE.content.querySelector('.dialog__message-text');
	const templateDate = TEMPLATE.content.querySelector('.dialog__message-time');

	templateText.textContent = messageText;
	templateDate.textContent = timeConverter();

	UI_ELEMENTS.DIALOG_LIST.append(TEMPLATE.content.cloneNode(true));
	document.querySelector('ul > li:last-child').scrollIntoView(false);
}

async function sendAuthorizationCode() {
	try {
		let response = await fetch(API_DATA.AUTHORIZATION_CODE_LINK, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({ email: getInputEmail() })
		});

		if (!response.ok) {
			alert("Email is not valid")
		}
	} catch (err) {
		alert(err);
	}
}

function timeConverter() {
	const date = new Date(Date.now());

	let hour = String(date.getHours());
	if (hour.length === 1) {
		hour = 0 + hour;
	}
	let minute = String(date.getMinutes());
	if (minute.length === 1) {
		minute = 0 + minute;
	}
	return `${hour}:${minute}`;
}

