import { UI_ELEMENTS, API_DATA } from "./view.mjs";
export { sendMessage, getInputMessage, timeConverter, sendAuthorizationCode, saveTokenCookie, sendAuthorizationRequest };


getMessagesRequest();


let myChatName = 'Я';


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


function getInputToken() {
	let inputToken = UI_ELEMENTS.INPUT_CONFIRMATION.value;
	UI_ELEMENTS.INPUT_CONFIRMATION.value = '';
	return inputToken;
}


function getInputName() {
	return UI_ELEMENTS.INPUT_SETTINGS.value;
}


async function getMessagesRequest() {
	let response = await fetch(API_DATA.MESSAGES_LINK)

	let json = await response.json();

	for (let i = 0; i < 2; i++) {
		let sendDate = timeConverter(new Date(json.messages[i].createdAt).getTime())
		sendMessage(json.messages[i].text, sendDate, json.messages[i].user.name)
	}
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
			alert("Your email is not correct")
		}
	} catch (err) {
		alert(err);
	}
}


async function sendAuthorizationRequest() {
	let response = await fetch(API_DATA.AUTHORIZATION_CODE_LINK, {
		method: 'PATCH',
		headers: {
			'Authorization': `Bearer ${getCookie()}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ name: getInputName() })
	});
checkAuthorizationRequest(response);
}


function sendMessage(messageText, messageDate, messageName = myChatName) {
	const TEMPLATE = (messageName === myChatName) ? document.querySelector('#tmpl') : document.querySelector('#tmp2');
	const templateName = TEMPLATE.content.querySelector('.userNoSelect');
	const templateText = TEMPLATE.content.querySelector('.dialog__message-text');
	const templateDate = TEMPLATE.content.querySelector('.dialog__message-time');

	templateName.textContent = messageName + ':';
	templateText.textContent = messageText;
	templateDate.textContent = messageDate;

	UI_ELEMENTS.DIALOG_LIST.append(TEMPLATE.content.cloneNode(true));
	document.querySelector('ul > li:last-child').scrollIntoView(false);
}


function checkAuthorizationRequest(res){
	if (UI_ELEMENTS.BTN_EXIT.textContent === 'Sign in'){
	UI_ELEMENTS.NITIFICATION.textContent = 'You need to sign in to change your name';
	UI_ELEMENTS.NITIFICATION.style.color = 'red';
	} else if(!res.ok){
		UI_ELEMENTS.NITIFICATION.textContent = 'Authorization error, check your code';
		UI_ELEMENTS.NITIFICATION.style.color = 'red';
		UI_ELEMENTS.BTN_EXIT.textContent = 'Sign in';
	} else if (res.ok) {
		myChatName = getInputName();
		changeMyChatName();
		UI_ELEMENTS.NITIFICATION.style.color = '#48d030';
		UI_ELEMENTS.NITIFICATION.textContent = 'Your name has been successfully changed!';
	} else {alert('Authorization error')}
	showNotidication();
	}


function changeMyChatName() {
	const myMessages = document.querySelectorAll('.personalMessage');

	myMessages.forEach(item => {
		item.textContent = myChatName + ":";
	});
}

function showNotidication(){
	UI_ELEMENTS.NITIFICATION.style.display = 'flex';
	setTimeout(() => {
		UI_ELEMENTS.NITIFICATION.style.display = 'none';
	}, 3000);
}


function saveTokenCookie() {
	let updatedCookie = "Token=" + encodeURIComponent(getInputToken());
	document.cookie = updatedCookie;
}


function getCookie() {
	let name = 'Token';
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function timeConverter(time = Date.now()) {
	const date = new Date(time);

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

