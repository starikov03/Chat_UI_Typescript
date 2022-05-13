
import { timeConverter, showNotice } from "../helperFunctions/main.js";
import { getCookie } from "../cookie/cookie.js";
import { sendMessage } from "../chatMessages/chatMessages.js";
import { userData } from "../UI_ELEMENTS/view.js";

const socket: WebSocket = new WebSocket(`wss://mighty-cove-31255.herokuapp.com/websockets?${getCookie("Token")}`);


socket.onopen = function (e: Event): void {
	showNotice("[open] Connection opened.", '#48d030');
};


socket.onmessage = function (event: MessageEvent<any>): void {
	let json: userData = JSON.parse(event.data);
	let sendDate: string = timeConverter(new Date(json.createdAt).getTime());
	sendMessage(json.text, sendDate, json.user.name, json.user.email);
};


socket.onclose = function (event): void {
	if (event.wasClean) {
		showNotice(`[close] Connection closed , code=${event.code} reason=${event.reason}.`, 'red');
	} else {
		showNotice('[close] Connection terminated.', 'red');
	}
};


export function sendMessageToServer(Text: string): void {
	socket.send(JSON.stringify({
		text: Text,
	}));
}


socket.onerror = function (error: any): void {
	showNotice(`[error] ${error.message}.`, 'red');
};
