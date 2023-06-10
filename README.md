# Clasificador de dígitos manuales (Handwritten digit classifier)
Este trabajo es solamente una práctica de la Lección 3 de [Practical Deep Learning](https://course.fast.ai/) y del capítulo 4 del libro [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). Este ejercicio, como práctica de un principiante sin mucha experiencia, no tiene una gran precisión, especialmente con los dígitos 0 y 6, pero parece que funciona razonablemente bien y tal vez pueda ayudar a otros estudiantes a ahorrar algún tiempo de trabajo.
>This work is just a practice from Lesson 3 of [Practical Deep Learning](https://course.fast.ai/) and Chapter 4 of the book [Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD](https://course.fast.ai/Resources/book.html). This exercise, as practice for a beginner without much experience, is not very accurate, especially with the digits 0 and 6, but it seems to work reasonably well and perhaps it can help other students to save some working time.

## Jupyter notebook LeeDigito_entrenar.ipynb
Con este cuaderno entrenamos el modelo  partir de la biblioteca **MNIST**, consiguiendo una precisión del 99%. Exportamos el modelo pkl para usarlo después con HugginsFace spaces y gradio.
>With this notebook we train the model from the **MNIST** library, achieving an accuracy of 99%. We export the pkl model for later use with HugginsFace spaces and gradio.

## HugginFace spaces
Pueden probar el modelo con [HugginFace](https://huggingface.co/spaces/efermon/leedigito). Para ello necesitamos la aplicación *app.py*, las imágenes ejemplos *dos.png*, *cinco.png* y *seis.png*. 
Por último el fichero requirements.txt

## Github

