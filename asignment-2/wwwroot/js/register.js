
function clearInputs(){
    $(".control").val("");
}
function saveProperty() {
    //Get values into vars
    var Title = UI.txtTitle.val();
    var Image = UI.txImage.val();
    var Price = UI.txtPrice.val();
    var Beds = UI.txtBeds.val();
    var Baths = UI.txtBaths.val();
    var Area = UI.txtArea.val();
    var Description = UI.txtDescription.val();
    var GridRadios1 = UI.gridRadios1.val();
    var GridRadios2 = UI.gridRadios2.val();


    //Create an object
    var properties = new Properties(Title,Image, Price, Beds, Baths, Area, Description, GridRadios1, GridRadios2);
    //clear the form
    clearInputs();

        //send the object to BE

        //show an message
    
}
function init() {
    console.log("Register Page");

    UI = {
        btnSave: $("#btnSave"),
        secForm: $("#section-Form"),
        txtTitle: $("#txtTitle"),
        txImage: $("#txImage"),
        txtPrice: $("#txtPrice"),
        txtBeds: $("#txtBeds"),
        txtBaths: $("#txtBaths"),
        txtArea: $("#txtArea"),
        txtDescription: $("#txtDescription"),
        gridRadios1: $("#gridRadios1"),
        gridRadios2: $("#gridRadios2")

    }
    //Events
    UI.btnSave.click(saveProperty);
}

window.onload = init;