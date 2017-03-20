// JavaScript source code

(function () {
    var rotator = document.getElementById('rotator'),
        dir = 'img/',
        delayInSeconds = 1,
        num = 1,
        len = 5;
    setInterval(function () {
        rotator.src = dir + num + '.jpg';
        num = (num === len) ? 1 : ++num;
    }, delayInSeconds * 2000);
}());