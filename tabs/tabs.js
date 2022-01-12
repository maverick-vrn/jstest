document.addEventListener('click', function(e){
    var name = e.target.className;
    if (name.includes('tab'))
    {
        var els = document.getElementsByClassName('info');
        [].forEach.call(els, function(el) {el.style.display = 'none'});
        name = name.slice(5);
        document.getElementById(name).style.display = 'inline-block';
        [].forEach.call(document.getElementsByClassName('tabs'), function(el) {el.style.color = "bbb";})
        e.target.style.color = '#111';
        
    }
})