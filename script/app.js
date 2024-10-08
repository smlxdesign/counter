let count = loadFromStorage() || 0;

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
			break;

		default:
			break;
	}

	saveToStorage();
	renderApp();
}

function saveToStorage() {
	localStorage.setItem('count', count);
}

function loadFromStorage() {
	return localStorage.getItem('count');
}
