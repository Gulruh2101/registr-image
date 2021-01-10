alert('hello dears!!🥰')

const arrgument = []
form.onsubmit = (masalan)=>{
    masalan.preventDefault()
    const path = rasm.value.replace(rasm.value.slice(0, rasm.value.indexOf('fakepath')+8), '.')
    const object = {
        name: ism.value,
        about: about.value,
        path: path
    }
    arrgument.push(object)
    for(bir of arrgument){
        const h2 = document.createElement("H2")
        const p = document.createElement('P')
        const img = document.createElement("IMG")
        img.classList.add('photo')
        h2.textContent = bir.name
        p.textContent = bir.about
        img.src = bir.path
        shaxsiyMalumotlar.appendChild(h2)
        shaxsiyMalumotlar.appendChild(p)
        shaxsiyMalumotlar.appendChild(img)
        console.log(shaxsiyMalumotlar)
    }
}