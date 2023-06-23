function validateForm(){
	const form=document.getElementById('my-form');
	if(form.elements[0].value[0]>'Z' || form.elements[0].value.length<3){
		document.querySelectorAll("small")[0].innerHTML="name is incorrect";
	}
	return false;
}
