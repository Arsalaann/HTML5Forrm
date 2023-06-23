function validateForm(){
	const form=document.getElementById('my-form');
	if(form.elements[0].value[0]>'Z' || form.elements[0].value.length<3){
		document.querySelectorAll("small")[0].innerHTML="name is incorrect";
		return false;
	}
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.elements[2].value)==false){
		document.querySelectorAll("small")[2].innerHTML="Invalid Email";
		return false;
	}
	if(/[0-9]{2}\s[0-9]{10}/.test(form.elements[4].value)==false){
		document.querySelectorAll("small")[4].innerHTML="Invalid Number";
		return false;
	}
	return true;
}
