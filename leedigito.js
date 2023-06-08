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
    console.log('Url='+imgurl);
    digito.src = imgurl;
    run(imgurl);




async function run(imgUrl) {
    console.log(imgUrl);
    /*	
    import { client } from "@gradio/client";	
    
	const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
	const exampleImage = await response_0.blob();
    


    const img = await fetch(imgUrl);
    const imgDat = await img.blob();
						
	const app = await client("https://efermon-leedigito.hf.space/");
	const result = await app.predict("/predict", [
				imgDat, 	// blob in 'img' Image component
	]);

	console.log(result?.data);
	*/
}


}

window.addEventListener("load", inicio, false);

