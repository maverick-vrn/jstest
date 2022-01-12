var counter = 0; 
var field = [0,1,2,3,4,5,6,7,8];

document.addEventListener('click', function(event) {
    // if (e.target.className == 'block')
    // {
    //     r = Math.random().toString(16).substring(4,6);
    //     g = Math.random().toString(16).substring(3,5);;
    //     b = Math.random().toString(16).substring(5,7);;
    //     e.target.style.backgroundColor = '#' + (r + g + b);
    // }
    if (event.target.className == 'block') {
        var cell = event.target.id;
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
        e
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
    document.location.reload();
    field = [0,1,2,3,4,5,6,7,8]; 
}

function check_win(field) {
    //  if ((field[0] == field[1]) && (field[1] == field[2])) {alert('You Win');}
    //  if ((field[3] == field[4]) && (field[4] == field[5])) {alert('You Win');}
    //  if ((field[6] == field[7]) && (field[7] == field[8])) {alert('You Win');}
     
    //  if ((field[0] == field[3]) && (field[3] == field[6])) {alert('You Win');}
    //  if ((field[1] == field[4]) && (field[4] == field[7])) {alert('You Win');}
    //  if ((field[2] == field[5]) && (field[5] == field[8])) {alert('You Win');}

    //  if ((field[0] == field[4]) && (field[4] == field[8])) {alert('You Win');}
    //  if ((field[2] == field[4]) && (field[4] == field[6])) {alert('You Win');}

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

