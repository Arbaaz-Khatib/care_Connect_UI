//Profile Pic Code Start
$(document).ready(()=>{
	$('#profile-image-upload').change(function(){
		const file = this.files[0];
		console.log(file);
		if (file){
		let reader = new FileReader();
		reader.onload = function(event){
			console.log(event.target.result);
			$('#profile-image1').attr('src', event.target.result);
		}
		reader.readAsDataURL(file);
		}
	});
	});
                        $(function() {
              $('#profile-image1').on('click', function() {
                  $('#profile-image-upload').click();
              });
          });
//Profile Pic Code Ends

//Date picker 
const picker = MCDatepicker.create({
    el: '#startDate',
    bodyType: 'inline'
});


//TOGGLE SINGLE SELECT CheckBoxes
$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

//SHOW HIDE DIV
function ShowTechDiv(techExpYes) {
    var selectTechExp = document.getElementById("technicalCB");
    selectTechExp.style.display = techExpYes.checked ? "block" : "none";
}

function HideTechDiv(techExpNo) {
    var selectTechExp = document.getElementById("technicalCB");
    selectTechExp.style.display = techExpNo.checked ? "none" : "none";
 }

 function ShowDietDiv(dietExpYes) {
    var selectDietExp = document.getElementById("dietCB");
    selectDietExp.style.display = dietExpYes.checked ? "block" : "none";
}

function HideDietDiv(dietExpNo) {
    var selectDietExp = document.getElementById("dietCB");
    selectDietExp.style.display = dietExpNo.checked ? "none" : "none";
 }

 function ShowEpilepticDiv(epilepticExpYes) {
    var selectDiv = document.getElementById("epilepticCB");
    selectDiv.style.display = epilepticExpYes.checked ? "block" : "none";
}

function HideEpilepticDiv(epilepticExpNo) {
    var selectDiv = document.getElementById("epilepticCB");
    selectDiv.style.display = epilepticExpNo.checked ? "none" : "none";
 }


function ShowHideGender(expectedGenderYes) {
    var selectGender = document.getElementById("selectGender");
    selectGender.style.display = expectedGenderYes.checked ? "block" : "none";
}

function HideGender(expectedGenderNo) {
    var selectGender = document.getElementById("selectGender");
    selectGender.style.display = expectedGenderNo.checked ? "none" : "none";
 }

 function ShowAge(expectedAgeYes) {
    var selectAge = document.getElementById("selectAge");
    selectAge.style.display = expectedAgeYes.checked ? "block" : "none";
}

function HideAge(expectedAgeNo) {
    var selectAge = document.getElementById("selectAge");
    selectAge.style.display = expectedAgeNo.checked ? "none" : "none";
 }

//END OF SHOW HIDE

