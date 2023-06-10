const COLOR = "black";
const COLOR_FONDO = "white"
const GROSOR = 6;

let x0 = 0, y0 = 0, x1 = 0, y1 = 0;
let swDibujo = false; 
let ctx = null;


function inicio(){
    const canva = document.getElementById("canva");
    ctx = canva.getContext("2d");

    canva.width = 215;
    canva.height = 215;


    canva.addEventListener("mousedown", mouse_down, false)
    canva.addEventListener("mousemove", mouse_move, false)
    canva.addEventListener("mouseup", mouse_up, false)
    canva.addEventListener("mouseout", mouse_out, false)



    const btnbor = document.getElementById("btnBor");
    btnbor.addEventListener("click", Limpia_canvas, false);

    const btnver = document.getElementById("btnVer");
    btnver.addEventListener("click", Reconocer, false);

    
    Limpia_canvas()

}   

function situaX(X) {
    return X - canva.getBoundingClientRect().left;
}
function situaY(Y) {
    return Y - canva.getBoundingClientRect().top;
}

function Limpia_canvas() {
    ctx.fillStyle = COLOR_FONDO;
    ctx.fillRect(0, 0, canva.width, canva.height);
}

function mouse_down(evento) {
    x0 = x1;
    y0 = y1;
    x1 = situaX(evento.clientX);
    y1 = situaY(evento.clientY);
    ctx.beginPath();
    ctx.fillStyle = COLOR_FONDO;
    ctx.fillRect(x1, y1, GROSOR, GROSOR);
    ctx.closePath();
    swDibujo = true;
}

function mouse_move(evento) {
    if (!swDibujo) {
        return;
    }

    x0 = x1;
    y0 = y1;
    x1 = situaX(evento.clientX);
    y1 = situaY(evento.clientY);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = GROSOR;
    ctx.stroke();
    ctx.closePath();
}

function mouse_up() {
    swDibujo = false;
}
function mouse_out() {
    swDibujo = false;
}

function Reconocer() {
    const digito = document.getElementById("imagen");
    const imgurl = canva.toDataURL("image/png");	
	digito.src = imgurl;
    predecir(imgurl);
}

async function predecir(reader) {
    const response = await fetch('https://efermon-leedigito.hf.space/run/predict', {  
      method: "POST", body: JSON.stringify({ "data": [reader] }),
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json();

    const label0 = json['data'][0]['confidences'][0]['label'];
    const prob0  = json['data'][0]['confidences'][0]['confidence'];
    const rsu0   = Number(prob0.toFixed(2)) * 100;
    pred0.innerHTML = 'Predición:' + label0
    prec0.innerHTML = ' ' + rsu0 + '%'

    const label1 = json['data'][0]['confidences'][1]['label'];
    const prob1  = json['data'][0]['confidences'][1]['confidence'];
    const rsu1   = Number(prob1.toFixed(2)) * 100;
    pred1.innerHTML = 'Opción:' + label1
    prec1.innerHTML = ' ' + rsu1 + '%'

    const label2 = json['data'][0]['confidences'][2]['label'];
    const prob2  = json['data'][0]['confidences'][2]['confidence'];
    const rsu2   = Number(prob2.toFixed(2)) * 100;
    pred2.innerHTML = 'Opción:' + label2
    prec2.innerHTML = ' ' + rsu2 + '%'


  }

window.addEventListener("load", inicio, false);

