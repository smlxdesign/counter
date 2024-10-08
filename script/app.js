const milestones = [10, 20, 50, 100, 150, 200, 300, 400, 500, 1000];

let count = loadFromStorage('count') || 0;
let milestonesReached = loadFromStorage('milestonesReached') || [];

renderApp();

function renderApp() {
	const mainElement = document.querySelector('main');
	const aboveZero = count > 0;

	let newHtml = '';

	newHtml = `
		<h1 ${aboveZero ? 'class="big"' : ''}>
			${aboveZero ? count : 'Counter'}
		</h1>

		<div class="buttons">
			<button
			onclick="updateCount('down')" id="btn-down">Decrease</button>
			<button onclick="updateCount('reset')" id="btn-reset">Reset</button>
			<button onclick="updateCount('up')" class="primary" id="btn-up">Increase</button>
		</div>
	`;

	mainElement.innerHTML = newHtml;
}

function updateCount(action) {
	switch (action) {
		case 'down':
			if (count - 1 >= 0) {
				count--;
			}
			break;

		case 'reset':
			count = 0;
			break;

		case 'up':
			count++;

			if (count === milestones[milestonesReached.length]) {
				pushMilestone();
			}

			break;

		default:
			break;
	}

	saveToStorage('count');
	renderApp();
}

function saveToStorage(key) {
	if (key === 'count') {
		localStorage.setItem('count', count);
	} else if (key === 'milestonesReached') {
		localStorage.setItem('milestonesReached', milestonesReached);
	}
}

function loadFromStorage(key) {
	if (key === 'count') {
		return localStorage.getItem('count');
	} else if (key === 'milestonesReached') {
		return localStorage.getItem('milestonesReached');
	}
}

function pushMilestone() {
	milestonesReached.push(milestones[milestonesReached.length]);
	saveToStorage('milestonesReached');
	setTimeout(() => {
		alert(`You've reached ${milestonesReached[milestonesReached.length - 1]}!`);
	}, 1);
}

function renderMessage(message, title, colour) {
	const messageContainer = document.querySelector('.message-container');
	let newHtml = '';
	messageContainer.innerHTML = '';

	newHtml = `
		<div class="message message-${colour}">
			${title ? `<span class="message-title">${title}</span>` : ''}
			<p class="message-text">
				${message}
			</p>
		</div>
	`;

	messageContainer.innerHTML = newHtml;
}
