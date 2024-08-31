function toggleEdit() {
  
    var elementosEditable = document.querySelectorAll('#contactName, #contactProfession, #contactPhone, #contactEmail, #contactWebsite, #reference1, #reference2, #socialMedia, #aboutMe, #skillsList, #experienceList, #educationList');
    
   
    elementosEditable.forEach(function(elemento) {
        if (elemento.contentEditable === "true") {
            elemento.contentEditable = "false";
        } else {
            elemento.contentEditable = "true";  
        }
    });
}
