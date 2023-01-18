let heading = document.getElementById('heading');
let shadow = ``;
for(let i=0;i<500;i++) {
	shadow += `${shadow == '' ? '' : ','} ${i}px ${i}px 0 #01ded3`;
}

heading.style.textShadow = shadow;