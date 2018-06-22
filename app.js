const form = document.getElementById('registar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
// storing the ul element in the ul varibale

form.addEventListener('submit', e => {
	// e is short for event this is know as the event parameter/argument
	console.log('hi');
	e.preventDefault();
	// on the event of being sumbited we will prevent default behaviour
	// were doing this because the default behaviour is refresh the page on submit
	const text = input.value;
	// the users input is now stored in the above varibale
	input.value = '';
	// after the user input the name it will replace it with an empty string
	// we can do becasue the suer input has been saved outside the function in
	// the const input variable at the top of the page
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
  const buttom = document.createElement('button');
	// creating an input element
	button.textContent = 'remove';
	// the type of element we are creating is a checkbox
	label.appendChild(checkbox);
  // something
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
