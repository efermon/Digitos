__all__ = ['learn', 'prepara_imagen', 'clasificador', 'categorias', 'imagen', 'etiqueta', 'ejemplos', 'intf']

from fastai.vision.all import *
import gradio as gr

learn = load_learner('modelo_resnet.pkl')
categorias = learn.dls.vocab

    
def clasificador(img):
    #Invertir imagen
    tns = np.invert(img) 
    dgto = Image.fromarray(tns)

    
    #Convertir a escala de grises
    dgto = dgto.convert('L')

    #Ajustar tamaño a 28*28
    dgto = dgto.resize((28,28))

    tns = tensor(dgto)

    # Predición
    pred,idx,probs = learn.predict(tns)
    
    return dict(zip(categorias, map(float,probs)))

imagen   = gr.Image(type="pil")
etiqueta = gr.outputs.Label()
ejemplos = ['dos.png','cinco.png','seis.png']

intf = gr.Interface(fn=clasificador, inputs=imagen, outputs=etiqueta, examples=ejemplos)
intf.launch()
