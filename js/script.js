const titleElem = document.querySelector('.title')
document.addEventListener('keyup', function(event) {
    appendValueToDom(event)
    let userEventKey = event.key.toUpperCase() // 's a d'
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function() {
        mainKeyElem.classList.remove('hit')
    })

})


function appendValueToDom(event) {
    console.log(event.code)
    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        let mainKeyElem = document.getElementById('back')
        mainKeyElem.classList.add('hit')

        mainKeyElem.addEventListener('animationend', function() {
            mainKeyElem.classList.remove('hit')
        })
        return
    } else if (event.code == 'Enter') {
        let mainKeyElem = document.getElementById('enter')
        mainKeyElem.classList.add('hit')

        mainKeyElem.addEventListener('animationend', function() {
            mainKeyElem.classList.remove('hit')
        })
        return

    }

    titleElem.innerHTML += event.key

}

let liButtons = document.getElementsByTagName('li')

for (let btn of liButtons) {
    btn.addEventListener('click', function(event) {
        if (event.target.id === 'back') {
            let mainKeyElem = document.getElementById('back')
            mainKeyElem.classList.add('hit')

            mainKeyElem.addEventListener('animationend', function() {
                mainKeyElem.classList.remove('hit')
            })
            titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
            return
        } else if (event.target.id === 'enter') {
            let mainKeyElem = document.getElementById('enter')
            mainKeyElem.classList.add('hit')

            mainKeyElem.addEventListener('animationend', function() {
                mainKeyElem.classList.remove('hit')
            })
            return

        }

        titleElem.innerHTML += event.target.id
        let mainKeyElem = document.getElementById(event.target.id)

        mainKeyElem.classList.add('hit')

        mainKeyElem.addEventListener('animationend', function() {
            mainKeyElem.classList.remove('hit')
        })


    })
}