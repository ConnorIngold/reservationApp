const form = document.getElementById('registar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
// storing the ul element in the ul varibale

function createLI (text) {
  const li = document.createElement('li');
  // There are no li elements in the html so this method creates them and stores
  // them in the li variable
  li.textContent = text;
  // this make it so the input from the user is turned in a li element
  const label = document.createElement('label');
  // creating a label
  label.textContent = 'Confirmed';
  // setting the text to Confirmed so on the page the text 'Confirmed will show'
  const checkbox = document.createElement('input');
  // creating an input element
  checkbox.type = 'checkbox';
  // the type of element we are creating is a checkbox
  label.appendChild(checkbox);
  // addding the label to the checkbox
  li.appendChild(label);
  // since the checkbox is now attached to the label we attach the label to the
  // li and a checkbox will appear everytime a new li is created by the user
  const button = document.createElement('button');
  // creating an input element
  button.textContent = 'remove';
  // the type of element we are creating is a checkbox
  li.appendChild(button);
  // something
  return li 
}

form.addEventListener('submit', e => {
	// e is short for event this is know as the event parameter/argument
	e.preventDefault();
	// when the user submits the form we cancel the browers usall submit behavior
	const text = input.value;
	// store the input from the user
	input.value = '';
  // then clear the input
  const li = createLI(text);

	ul.appendChild(li);
	// So far we have created the li element but we havent told them where to go
	// so we make them as a child of the ul by the code and above and then they
	// know who there parents (unlike me) and where they belong(on the webpage)
	// on the webpage
});

ul.addEventListener('change', e => {
	//here were creating adding an event listener with the function of change
	const checkbox = event.target;
	const checked = checkbox.check;
	const listItem = checkbox.parentNode.parentNode;

	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});

ul.addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li)
	}
});
