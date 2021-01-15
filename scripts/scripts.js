let detailsVisible = true;
let hideIcon = '<i class="far fa-eye-slash"></i>';
let showIcon = '<i class="far fa-eye"></i>';
let levelOfImportance = true;
let notImportant = '<i id="iconImp" class="far fa-star"></i>';
let isImportant = '<i id="iconImp" class="fas fa-star"></i>';


function toggleDetails(){
    if(detailsVisible){
        $("#details").hide();
        
        $("#btnDetails")
            .html(`${showIcon}Show details`)
            .removeClass('btn-success')
            .addClass('btn-danger');
            detailsVisible = false;
    }   else {
            $("#details").show();
            $("#btnDetails")
                .html(`${hideIcon}Hide details`)
                .removeClass('btn-danger')
                .addClass('btn-success');
                detailsVisible = true;
    }
}

function changeIconColor(){
    if(levelOfImportance){
        $("#iconImp")
        .removeClass('far')
        .addClass('fas');
        levelOfImportance = false;
    } else {
        $("#iconImp")
        .removeClass('fas')
        .addClass('far');
        levelOfImportance = true;
    }
}

function init(){
    $("#btnDetails").click(toggleDetails);
    $("#iconImp").click(changeIconColor);
}

window.onload = init;

/**
 * Task
 * 
 * Id - text 
 * Title - text
 * Important - icon
 * Description - text
 * StartDate - date
 * DueDate - date
 * Status - 
 * 
 * 
 */

