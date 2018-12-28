function init(){
    handleEvents(0);
}
function handleEvents(idx) {
    if (idx == 0) {
        $('#btnIntro').className= 'w3-button w3-black';
        $('#btnEvents').className= 'w3-button w3-white';
        $('#btnPhotos').className= 'w3-button w3-white';
        $('#btnLetters').className= 'w3-button w3-white';
        $('#divIntro').show();
        $('#divEvents').hide();
        $('#divPhotos').hide();
        $('#divLetters').hide();
    } else if(idx==1){
        $('#btnEvents').className= 'w3-button w3-black';
        $('#btnIntro').className= 'w3-button w3-white';
        $('#btnPhotos').className= 'w3-button w3-white';
        $('#btnLetters').className= 'w3-button w3-white';
        $('#divEvents').show();
        $('#divIntro').hide();
        $('#divPhotos').hide();
        $('#divLetters').hide();
    } else if(idx==2){
        $('#btnLetters').className= 'w3-button w3-black';
        $('#btnIntro').className= 'w3-button w3-white';
        $('#btnPhotos').className= 'w3-button w3-white';
        $('#btnEvents').className= 'w3-button w3-white';
        $('#divPhotos').show();
        $('#divIntro').hide();
        $('#divEvents').hide();
        $('#divLetters').hide();
    } else if(idx==3){
        $('#btnLetters').className= 'w3-button w3-black';
        $('#btnIntro').className= 'w3-button w3-white';
        $('#btnPhotos').className= 'w3-button w3-white';
        $('#btnEvents').className= 'w3-button w3-white';
        $('#divLetters').show();
        $('#divIntro').hide();
        $('#divPhotos').hide();
        $('#divEvents').hide();
    }
}

var pageSize = 3, i = 1;
showPage = function (page) {
    $(".content").hide();
    $(".content").each(function (n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });
}

showPage(i);

$("#previous").click(function () {
    $("#next").removeClass("current");
    $(this).addClass("current");
    if (i != 1) {
        showPage(--i);
    }
});
$("#next").click(function () {
    $("#previous").removeClass("current");
    $(this).addClass("current");
    if (i < ($('.content').length) / 3) {
        showPage(++i);
    }
});