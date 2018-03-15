window.onload = () => {
	let titles = ['HOSTEL FOR STUDENTS OF KPI','HOUSE CLUB «NAGORNIY»','RESIDENTIAL COMPLEX «CAMPUS»','HOSTEL FOR STUDENTS OF KPI'];
	let counter = 0;

	document.getElementById('to-the-left').addEventListener('click',() => {
		if(counter === 0){
			counter = titles.length;
		}
		counter--;
		document.getElementById('show').innerHTML = titles[counter];
		document.getElementById('which').innerHTML = counter+1;
	});
	document.getElementById('to-the-right').addEventListener('click',() => {
		if(counter === titles.length-1){
			counter = -1;
		}
		counter++;
		document.getElementById('show').innerHTML = titles[counter];
		document.getElementById('which').innerHTML = counter+1;
	});

	let position = () => {
		document.getElementsByClassName('news-all')[0].style.marginLeft = 0 + 'px';
	};

	document.getElementById('new-one').addEventListener('click', position)
	document.getElementById('new-two').addEventListener('click', position)

	document.getElementById('new-three').addEventListener('click',() => {
		let width = document.getElementsByClassName('news-item')[0].offsetWidth;
		document.getElementsByClassName('news-all')[0].style.marginLeft = -1 * width + 'px';
	});
}