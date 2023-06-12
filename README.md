# Clasificador de dígitos manuales (Handwritten digit classifier)
Este trabajo es solamente una práctica de la Lección 3 de [Practical Deep Learning](https://course.fast.ai/) y del capítulo 4 del libro [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). Este ejercicio, como práctica de un principiante sin mucha experiencia, no tiene una gran precisión, especialmente con los dígitos 0 y 6, pero parece que funciona razonablemente bien y tal vez pueda ayudar a otras personas.
>This work is just a practice from Lesson 3 of [Practical Deep Learning](https://course.fast.ai/) and Chapter 4 of the book [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). This exercise, as practice for a beginner without much experience, is not very accurate, especially with the digits 0 and 6, but it seems to work reasonably well and maybe it can help other people.

## Jupyter notebook LeeDigito_entrenar.ipynb
Con este cuaderno entrenamos el modelo  partir de la biblioteca **MNIST**, consiguiendo una precisión del 99%. Exportamos el modelo pkl para usarlo después con HugginsFace spaces y gradio.
>With this notebook we train the model from the **MNIST** library, achieving an accuracy of 99%. We export the pkl model for later use with HugginsFace spaces and gradio.

## HugginFace spaces
Pueden probar el modelo con [HugginFace](https://huggingface.co/spaces/efermon/leedigito). Para ello necesitamos la aplicación *app.py*, las imágenes ejemplos *dos.png*, *cinco.png* y *seis.png* y el 
fichero requirements.txt.  En la aplicación *app.py*, en la función *clasificador*, antes de realizar la predición, invertimos la imagen, la pasamos a escala de grises y la reducimos a un tamaño de 28x28 pixels, que es como se entrenó el modelo.
>You can test the model with [HugginFace](https://huggingface.co/spaces/efermon/leedigito). For this we need the *app.py* application, the sample images *dos.png*, *cinco.png* and *.png* and the 
requirements.txt file.
In the *app.py* application, in the *clasificador* function, before making the prediction, we invert the image, convert it to greyscale and reduce it to a size of 28x28 pixels, which is how the model was trained.



## Github
Aquí se despliega una [página básica](https://efermon.github.io/digitos/) que permite dibujar un dígito con el ratón y que sea reconocido por el modelo en HugginFace. Un poco de html y css y algo más de javascript para gestionar el canvas y llamar a HuggingFace.
>Here is a [basic page](https://efermon.github.io/digitos/) that allows you to draw a digit with the mouse and have it recognised by the model in HugginFace. A bit of html and css and some more javascript to manage the canvas and call HuggingFace.

## Proceso de trabajo (Working process)

### Intento 1 (Attempt 1)
En el primer intento trato de seguir el código utilizado en el capítulo 4 para reconocer los dígitos 3 y 7
>In the first attempt I try to follow the code used in chapter 4 to recognise the digits 3 and 7.
```python
from fastai.vision.all import *
path = untar_data(URLs.MNIST)

#Conjunto de entrenamiento (Training set):
dig_img = get_image_files(path/'training').sorted()
t_tns_x = torch.stack([tensor(Image.open(o)) for o in dig_img])
t_tns_x = t_tns_x.float()/255
t_tns_x = t_tns_x.view(-1, 28 * 28)
t_tns_y = [int(o.parent.name) for o in dig_img]
t_tns_y = tensor(t_tns_y)

#Conjunto de validación (Validacion set):
dig_img = get_image_files(path/'testing').sorted()
v_tns_x = torch.stack([tensor(Image.open(o)) for o in dig_img])
v_tns_x = v_tns_x.float()/255
v_tns_x = v_tns_x.view(-1, 28 * 28)
v_tns_y = [int(o.parent.name) for o in dig_img]
v_tns_y = tensor(v_tns_y)

#DataSet y DataLoaders
t_dset = list(zip(t_tns_x,t_tns_y))
v_dset = list(zip(v_tns_x,v_tns_y))

t_dl = DataLoader(t_dset, batch_size=64,shuffle=True)
v_dl = DataLoader(v_dset, batch_size=64,shuffle=True)

dls = DataLoaders(t_dl, v_dl)


# Funciones
def mnist_loss(predictions, targets):
    predictions = predictions.sigmoid()
    return torch.where(targets==1, 1-predictions, predictions).mean()
  
def batch_accuracy(xb, yb):
    pred = xb.sigmoid()
    correct = (pred>0.5) == yb
    return correct.float().mean()

simple_net = nn.Sequential(
    nn.Linear(28*28,60),
    nn.ReLU(),
    nn.Linear(60,1),
)
```




```python
 
```
