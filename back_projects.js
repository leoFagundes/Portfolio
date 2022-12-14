function alterarImagem(objeto, caminhoNovo) {
    document.getElementById(objeto).src = caminhoNovo
}

document.body.style.background = 'rgba(255, 255, 255, 0.8)'

function changeColor(color, color2) {
    if (document.body.style.background == 'rgba(255, 255, 255, 0.8)') {
        document.body.style.background = color
        for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
            document.getElementsByTagName('p')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.getElementsByTagName('li')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
            document.getElementsByTagName('h1')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h4').length; i++) {
            document.getElementsByTagName('h4')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h5').length; i++) {
            document.getElementsByTagName('h5')[i].style.color = 'white'
        }
        document.getElementById('nav-bar').style.background = 'rgb(51, 51, 51, 0.8)'
        document.getElementById('theme').style.background = '#805AD5'
        alterarImagem('icon', './images/prog.png')
        alterarImagem('iconGit', './images/GitHub.png')
        alterarImagem('iconSM', './images/moon.png')
    }
    else {
        document.body.style.background = color2
        for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
            document.getElementsByTagName('p')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.getElementsByTagName('li')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
            document.getElementsByTagName('h1')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h4').length; i++) {
            document.getElementsByTagName('h4')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h5').length; i++) {
            document.getElementsByTagName('h5')[i].style.color = 'black'
        }
        document.getElementById('nav-bar').style.background = 'rgba(255, 255, 255, 0.8)'
        document.getElementById('theme').style.background = '#FBD38D'
        alterarImagem('icon', './images/progNeg.png')
        alterarImagem('iconGit', './images/GitHubNeg.png')
        alterarImagem('iconSM', './images/sun.png')
    }
}

