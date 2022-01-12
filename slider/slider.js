// function slide()
// {
//     for (let i = 0; i < SLIDES_COUNT; i++) 
//     {
//         setTimeout(() => {
//             index = 'slide' + i;
//             var _slide = document.getElementById(index);
//             _slide.className = 'active';
//             }, 300);
        
//     }
// }
            

const SLIDES_COUNT = 3;    // Число слайдов
var index = 1;
//if (document.getElementById('slide1').className == 'active') {index = 1;} else {index = 0;}         
// индекс текущей картинки, если по умочанию стоит первая картинка, то индекс = 1, если картинки нет индекс = 0
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
    if (index>0) {
        _slide = document.getElementById('slide'+(index-1));
        _slide.className = 'no-active';
        /*  Прячем предыдущую
            If нужен для первого прохода - работает и без него  */
     }
},5000)
