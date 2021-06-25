    function createParagraph() {
	  let para = document.createElement('p');
	  para.textContent = '你点击了这个按钮！';
	  document.body.appendChild(para);
	}

	const buttons = document.querySelectorAll('button');

	for(let i = 0; i < buttons.length ; i++) {
	 let btn = buttons[i];
     if (btn.id === 'test') {
        buttons[i].addEventListener('click', createParagraph);
     } 
	}
  
