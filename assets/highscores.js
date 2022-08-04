var highscoreContainer = document.querySelector('.scores-container')

var storage = JSON.parse(localStorage.getItem('highscores'))

if (storage === null || storage === []) {
    var p = document.createElement('p')
    p.textContent = 'No Highscores'
    highscoreContainer.append(p)
} else {
    highscoreContainer.textContent = ''
    for (var i = 0; i< storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = `Name: ${storage[i].name} ------ Score: ${storage[i].highscore}`
        highscoreContainer.append(p)
    }
}