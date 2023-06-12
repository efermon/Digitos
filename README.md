# Clasificador de dígitos manuales (Handwritten digit classifier)
Este trabajo es solamente una práctica de la Lección 3 de [Practical Deep Learning](https://course.fast.ai/) y del capítulo 4 del libro [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). Este ejercicio, como práctica de un principiante sin mucha experiencia, no tiene una gran precisión, especialmente con los dígitos 0 y 6, pero parece que funciona razonablemente bien y tal vez pueda ayudar a otras personas.
>This work is just a practice from Lesson 3 of [Practical Deep Learning](https://course.fast.ai/) and Chapter 4 of the book [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). This exercise, as practice for a beginner without much experience, is not very accurate, especially with the digits 0 and 6, but it seems to work reasonably well and maybe it can help other people.

## Jupyter notebook LeeDigito_entrenar.ipynb
Con este cuaderno entrenamos el modelo  partir de la biblioteca **MNIST**, consiguiendo una precisión del 99%. Exportamos el modelo pkl para usarlo después con HugginsFace spaces y gradio.
>With this notebook we train the model from the **MNIST** library, achieving an accuracy of 99%. We export the pkl model for later use with HugginsFace spaces and gradio.

## HugginFace spaces
Pueden probar el modelo con [HugginFace](https://huggingface.co/spaces/efermon/leedigito). Para ello necesitamos la aplicación *app.py*, las imágenes ejemplos *dos.png*, *cinco.png* y *seis.png* y el 
fichero requirements.txt. 

En la aplicación *app.py*, en la función *clasificador*, antes de realizar la predición, invertimos la imagen, la pasamos a escala de grises y la reducimos a un tamaño de 28x28 pixels, que es como se entrenó el modelo.
>You can test the model with [HugginFace](https://huggingface.co/spaces/efermon/leedigito). For this we need the *app.py* application, the sample images *dos.png*, *cinco.png* and *.png* and the 
requirements.txt file.
In the *app.py* application, in the *clasificador* function, before making the prediction, we invert the image, convert it to greyscale and reduce it to a size of 28x28 pixels, which is how the model was trained.



## Github
Aquí se despliega una [página básica](https://efermon.github.io/digitos/) que permite dibujar un dígito con el ratón y que sea reconocido por el modelo en HugginFace. Un poco de html y css y algo más de javascript para gestionar el canvas y llamar a HuggingFace.
>Here is a [basic page](https://efermon.github.io/digitos/) that allows you to draw a digit with the mouse and have it recognised by the model in HugginFace. A bit of html and css and some more javascript to manage the canvas and call HuggingFace.
