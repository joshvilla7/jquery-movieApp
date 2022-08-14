
$('form').on('submit', function (e) {
    e.preventDefault();
    
    $('ul').append(`<li class="list">${$('#title').val()} <span> Rating:   ${$('#rating').val()}   </span> <span><button id="del">Delete</button></span></li>`);

    $('form')[0].reset();
});

$('ul').on('click', function(e) {
    $(e.target).closest('li').remove();
});
