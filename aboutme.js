import csesoc from 'text.js'
const aboutme = document.getElementById('aboutme')
const info = document.getElementById('info')
document.getElementById('dropdown').addEventListener('click', (event) => {
    if (aboutme.innerText) {
        aboutme.removeChild(document.querySelector('p'))
        info.style.display = 'flex'
    } else {
        info.style.display = 'none'
        const p = document.createElement('p')
            p.innerText = csesoc
            aboutme.appendChild(p)
    }
})
