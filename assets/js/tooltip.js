(function(){
    function raz(e) {
        var t = this.getElementsByTagName('span')[0],
            em = '-20', // 20 = max-width подсказки
            tR = t.getBoundingClientRect(),
            tS = getComputedStyle(t, '').fontSize.slice(0, -2),
            d = document.documentElement.getBoundingClientRect().right - tR.right;
        if(tR.left < 0) t.style.left = parseInt(tS * em - tR.left * 2) + 'px';
        if(d < 0) t.style.right = parseInt(tS * em - d * 2) + 'px';
    }
    var tooltip = document.querySelectorAll('.tooltip');
    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].addEventListener('click', raz, false);
        tooltip[i].addEventListener('mouseover', raz, false);
    }
})()
