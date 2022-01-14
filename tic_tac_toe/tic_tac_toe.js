var counter = 0; 
var field = [0,1,2,3,4,5,6,7,8]; // игровое поле

document.addEventListener('click', function(event) {
    if (event.target.className == 'block') {
        var cell = event.target.id;
        if ((field[cell] != 'x') && (field[cell] != 'o'))
        {
            counter++;
            if (counter % 2 === 0)
            {
                event.target.style.backgroundColor = '#ccc';
                update(cell, 'o');
            }
            else
            {
                event.target.style.backgroundColor = '#333';
                update(cell, 'x');
            }
        }
        
    }

});

function update(cell, type) 
{
    //check_win(field);
    if (type == 'x')
    {
        field[cell] = 'x';
    }
    else
    {
        field[cell] = 'o';
    }
    check_win(field);
}

function reload() 
{
    field = [0,1,2,3,4,5,6,7,8]; 
    counter = 0;
    //alert(field);
    //alert(counter);
    [].forEach.call(document.getElementsByClassName('block'), function(el) {el.style.backgroundColor = "#a52a2a";})
    //document.location.reload();
}

function check_win(field) {
    //  Все прямые линии по индексам, на которых могут стоять крестики или нолики для победы
     var win = [[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]];
                
     win.forEach(element => {
        if ( (field[element[0]] == field[element[1]]) && (field[element[1]] == field[element[2]]) )
        {
            if (field[element[0]] == 'x')
            {alert('X is the Winner !!!');}
            else {alert('O is the Winner !!!');}
            reload();
        }
     });
 }

