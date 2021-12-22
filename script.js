document.addEventListener('click', function(e) {
    if (e.target.className == 'block')
    {
        r = Math.random().toString(16).substring(4,6);
        g = Math.random().toString(16).substring(3,5);;
        b = Math.random().toString(16).substring(5,7);;
        e.target.style.backgroundColor = '#' + (r + g + b);
    }
});


function fun()
{
    var el = document.getElementsByTagName('a');
    if (el.item(0).style.display == 'none')
    {
        el.item(0).style.display = 'inline';
    }
    else 
    {
        el.item(0).style.display='none';

    }
}

const SLIDES_COUNT = 3;

function slide()
{
    for (let i = 0; i < SLIDES_COUNT; i++) {
        var _slide = document.getElementById('slide'+i.toString());
        _slide.style.className = 'active';
    }
}