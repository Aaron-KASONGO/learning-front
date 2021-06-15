$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('id')){
        $.getJSON('js/galleries.json', function(data){
            let galleryToDisplay = data[searchParams.get('id')];
            $('#singleGallery h1').text(galleryToDisplay.title);
            let rooUl = $('#singleGallery ul');
            $.each(galleryToDisplay.images, function(index, image){
                $(`<li><img src="images/${image}" /></li>`).click(showSinglePict).appendTo(rooUl);
            });
        });
    }else{
        window.location.pathname = 'Chapitre 4/04_01/galleries.html';
    }
});
function showSinglePict(evt){
    $('#galleryContainer').click(closeSinglePict).addClass('visible').children('img').attr('src', evt.target.src);
}
function closeSinglePict(){
    $('#galleryContainer').removeClass('visible');
}