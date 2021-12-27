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


// function slide()
// {
    //     for (let i = 0; i < SLIDES_COUNT; i++) {
        //         setTimeout(() => {
            //             index = 'slide' + i;
            //         var _slide = document.getElementById(index);
            //         _slide.className = 'active';
            //         }, 300);
            
            //     }
            // }
            

const SLIDES_COUNT = 3;    // Число слайдов
let index=0;                // индекс текущей картинки
setInterval(()=>{
    if(index<SLIDES_COUNT)
    {
        index++;
        /* Если текущая картинка не последняя - переходим к следующей   */
    }
    else
    {
        index=1;
        _slide = document.getElementById('slide'+SLIDES_COUNT);
        _slide.className = 'no-active';        
        /* Если отобразилась последняя картинка - ставим индекс на первую и прячем последнюю  */
    }
    var _slide = document.getElementById('slide'+index);   // Делаем активной картинку с текущим индексом 
    _slide.className = 'active';
    // if (index>0) {
        _slide = document.getElementById('slide'+(index-1));
        _slide.className = 'no-active';
        /*  Прячем предыдущую
            If нужен для первого прохода - работает и без него  */
    // }
},1000)
        
    