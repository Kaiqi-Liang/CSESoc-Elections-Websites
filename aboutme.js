const aboutme = document.getElementById('aboutme')
const info = document.getElementById('info')
document.getElementById('dropdown').addEventListener('click', (event) => {
    if (aboutme.innerText) {
        aboutme.removeChild(document.querySelector('p'))
        info.style.display = 'flex'
    } else {
        info.style.display = 'none'
        const p = document.createElement('p')
        p.innerText = "Hi welcome to my website, I am currently in my penultimate year of Computer Science at UNSW. Apart from programming my life also involves music and sports. I am an active person enjoying all sorts of sports, as well as my other hobby being singing and piano. Javascript is my favourite language as I'm writing it right now. Python is my least favrouite but it is also one of my best ironically."
        aboutme.appendChild(p)
    }
})
