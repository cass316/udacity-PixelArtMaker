var row, col, color;

$('#sizePicker').submit(function(evt){
    evt.preventDefault();
    row = $('#inputHeight').val();
    col = $('#inputWeight').val();
    makeGrid(row,col);
})

function makeGrid(height,width) {
    for (i = 1; i<= row; i++) {
        $('#pixelCanvas').append('<tr class=' + i + '></tr>');
        for (x = 1; x<= col; x++){
            $('.' + i).append('<td></td>');
        }
    }
    $('td').click(function gridColor(){
      color = $('#colorPicker').val();
      $('td').css('background-color' , color);
    })

}
