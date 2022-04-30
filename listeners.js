import { UI_ELEMENTS } from "./view.mjs";
import {
	sendMessage,
	getInputMessage,
	timeConverter,
	sendAuthorizationCode,
	saveTokenCookie,
	sendAuthorizationRequest
} from "./main.mjs";

UI_ELEMENTS.BTN_DIALOD.addEventListener('submit', () => {
	if (UI_ELEMENTS.INPUT_DIALOG_MESSAGE.value) sendMessage(getInputMessage(), timeConverter());
})

UI_ELEMENTS.BTN_AUTHORIZATION.addEventListener('click', () => {
	if (UI_ELEMENTS.INPUT_AUTHORIZATION.value) {
		UI_ELEMENTS.AUTHORIZATION_BLOCK.style.display = 'none';
		UI_ELEMENTS.CONFIRMATION_BLOCK.style.display = 'flex';
		sendAuthorizationCode();
	}
});

UI_ELEMENTS.BTN_CONFIRMATION.addEventListener('click', () => {
	if (UI_ELEMENTS.INPUT_CONFIRMATION.value) {
		saveTokenCookie();
		UI_ELEMENTS.BTN_EXIT.textContent = 'Sign out';
		UI_ELEMENTS.CONFIRMATION_BLOCK.style.display = 'none';
	}
})

UI_ELEMENTS.BTN_SETTINGS_SUBMIT.addEventListener('click', () => {
	if (UI_ELEMENTS.INPUT_SETTINGS.value) sendAuthorizationRequest();
})

UI_ELEMENTS.BTN_SETTINGS.addEventListener('click', () => {
	UI_ELEMENTS.SETTINGS_BLOCK.style.display = 'flex';
})

UI_ELEMENTS.BTN_CLOSE_SETTINGS.addEventListener('click', () => {
	UI_ELEMENTS.SETTINGS_BLOCK.style.display = 'none';
})

UI_ELEMENTS.BTN_CLOSE_AUTHORIZATION.addEventListener('click', () => {
	UI_ELEMENTS.AUTHORIZATION_BLOCK.style.display = 'none';
})

UI_ELEMENTS.BTN_EXIT.addEventListener('click', () => {
	UI_ELEMENTS.BTN_EXIT.textContent = 'Sign in';
	UI_ELEMENTS.AUTHORIZATION_BLOCK.style.display = 'flex';
})

UI_ELEMENTS.BTN_CLOSE_CONFIRMATION.addEventListener('click', () => {
	UI_ELEMENTS.CONFIRMATION_BLOCK.style.display = 'none';
})

UI_ELEMENTS.BTN_AUTHORIZATION_ENTER.addEventListener('click', () => {
	UI_ELEMENTS.AUTHORIZATION_BLOCK.style.display = 'none';
	UI_ELEMENTS.CONFIRMATION_BLOCK.style.display = 'flex';
})