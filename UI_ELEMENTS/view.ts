export const UI_ELEMENTS = {
	MESSAGE_BOX: document.querySelector('.dialog__message-box') as HTMLDivElement,
	BTN_SETTINGS: document.querySelector('.dialog__btn-settings') as HTMLButtonElement,
	BTN_EXIT: document.querySelector('.dialog__btn-exit') as HTMLButtonElement,
	BTN_CLOSE_SETTINGS: document.querySelector('.settings__close') as HTMLButtonElement,
	SETTINGS_BLOCK: document.querySelector('.settings') as HTMLDivElement,
	INPUT_SETTINGS: document.querySelector('.settings__input') as HTMLInputElement,
	BTN_SETTINGS_SUBMIT: document.querySelector('.settings__bottom') as HTMLFormElement,
	DIALOG_BLOCK: document.querySelector('.dialog') as HTMLDivElement,
	BTN_DIALOD: document.querySelector('.dialog__bottom') as HTMLFormElement,
	INPUT_DIALOG_MESSAGE: document.querySelector('.dialog__message-input') as HTMLInputElement,
	DIALOG_LIST: document.querySelector('.dialog__message-list') as HTMLUListElement,
	INPUT_AUTHORIZATION: document.querySelector('.authorization__input') as HTMLInputElement,
	BTN_AUTHORIZATION: document.querySelector('.authorization__bottom') as HTMLFormElement,
	BTN_CLOSE_AUTHORIZATION: document.querySelector('.authorization__close') as HTMLButtonElement,
	AUTHORIZATION_BLOCK: document.querySelector('.authorization') as HTMLDivElement,
	CONFIRMATION_BLOCK: document.querySelector('.confirmation') as HTMLDivElement,
	INPUT_CONFIRMATION: document.querySelector('.confirmation__input') as HTMLInputElement,
	BTN_CONFIRMATION: document.querySelector('.confirmation__bottom') as HTMLFormElement,
	BTN_CLOSE_CONFIRMATION: document.querySelector('.confirmation__close') as HTMLButtonElement,
	BTN_AUTHORIZATION_ENTER: document.querySelector('.Enter') as HTMLSpanElement,
	NOTICE_BLOCK: document.querySelector('.notice') as HTMLDivElement,
	NOTICE_TEXT: document.querySelector('.notice__text') as HTMLParagraphElement,
	NOTICE_CLOSE: document.querySelector('.notice__close') as HTMLButtonElement,
	NOTICE_OK: document.querySelector('.notice__submit') as HTMLButtonElement,
}

export const API_DATA = {
	AUTHORIZATION_CODE_LINK: 'https://mighty-cove-31255.herokuapp.com/api/user',
	USER_LINK: 'https://mighty-cove-31255.herokuapp.com/api/user/me',
	MESSAGES_LINK: 'https://mighty-cove-31255.herokuapp.com/api/messages',
}

interface constsData {
	SAVED_MESSAGES: any,
	MY_CHAT_NAME: string,
}

export const CONSTS: constsData = {
	SAVED_MESSAGES: [],
	MY_CHAT_NAME: '',
}

export interface userData {
	createdAt: string;
	text: string;
	updateAt?: string;
	user: {
		email: string;
		name: string;
	};
	_id?: string;
	__v?: number;
}
