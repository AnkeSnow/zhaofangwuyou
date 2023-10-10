function setRem() {
    var width = 375,
        clientWidth = document.documentElement.clientWidth || document.body.clientWidth,
        html_ = document.querySelector('html');
    html_.style.fontSize = (clientWidth / width) * 10 + 'px';
}


window.addEventListener('load', setRem);
window.addEventListener('resize', setRem)
