

var btns = document.querySelectorAll(".delete");
    Array.from(btns).forEach(function(btn){                                    
         btn.addEventListener('click',function(e){  
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
    });
});

var link = document.querySelector('#first a');

link.addEventListener('click',function(e){
	e.preventDefault();
	console.log("navigate to". e.target.textContent);
});

//delete book
var list = document.querySelector('#first ul');
list.addEventListener('click',function(e){
	if(e.target.className == 'delete'){
		//alert(e);
		 const li = e.target.parentElement;
		 li.parentNode.removeChild(li);
	}
});

//add booklist
var list = document.querySelector('#first ul');
const addform = document.forms['add-book'];

addform.addEventListener('submit',function(e){
	e.preventDefault();
	const value = addform.querySelector('input[type = "text"]').value;
	

	//create element
	const li = document.createElement('li');
	const bookname = document.createElement('span');
	const deletedata = document.createElement('span'); 

	//add content
	deletedata.textContent = "DELETE";
	bookname.textContent = value;

	//addClass
	bookname.classList.add('name');
	deletedata.classList.add('delete');


	//append to document
	li.appendChild(bookname);
	li.appendChild(deletedata);
	list.appendChild(li);

	//hidebooks
	var list = document.querySelector('#first ul');
	const hidebox = document.querySelector('#hide');
	hidebox.addEventListener('change',function(e){
		if(hidebox.checked){
			list.style.display = "none";
		}
		else{
			list.style.display = "block";
		}
	});

	//tabcontent

	const tabs = document.querySelector('.tabs');
	const panels = document.querySelectorAll('.panel');

	tabs.addEventListener('click',function(e){

	});

});

