let count = 2;

renderApp();

function renderApp() {
	const mainElement = document.querySelector('main');
	const countAboveZero = count > 0;

	let newHtml = '';

	newHtml = `
		<h1 ${countAboveZero ? 'class="big"' : ''}>
			${countAboveZero ? count : 'Counter'}
		</h1>

		<div class="buttons">
			<button onclick="updateCount('down')" id="btn-down">Decrease</button>
			<button onclick="updateCount('reset')" id="btn-reset">Reset</button>
			<button onclick="updateCount('up')" class="primary" id="btn-up">Increase</button>
		</div>
	`;

	mainElement.innerHTML = newHtml;
}

function updateCount(action) {
	switch (action) {
		case 'down':
			count--;
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

	renderApp();
}
