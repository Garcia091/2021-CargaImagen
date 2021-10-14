import {fileUpload} from './cloud.js'

let imagen = document.getElementById('imgCarga');
let resultado = document.getElementById('ResultadoIMG');

imagen.addEventListener('change',async(e)=>{
    const file = await fileUpload(e.target.files[0])
    console.log(file)
    crearImg(file)
})

function crearImg(file) {
    const imgHtml = document.createElement('div')
    imgHtml.classList.add('imagen')
    imgHtml.innerHTML = `<img src="${file}"  class="img"/>`

    resultado.appendChild(imgHtml)
    
}