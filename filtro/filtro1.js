function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador1 = document.getElementById('deslizador1')
  deslizador2 = document.getElementById('deslizador2')
  deslizador3 = document.getElementById('deslizador3')

  //-- Valor del deslizador
  range_value1 = document.getElementById('range_value1')
  range_value2 = document.getElementById('range_value2')
  range_value3 = document.getElementById('range_value3')

  gris = document.getElementById('gris')

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);







  function filtro(){



      //--Valor de los deslizadores
      range_value1 = document.getElementById('range_value1')
      range_value2 = document.getElementById('range_value2')
      range_value3 = document.getElementById('range_value3')


    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    //imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height/2);

    //-- Obtener el array con todos los píxeles
    data = imgData.data

    //-- Obtener el umbral en base al deslizador
    umbral1 = deslizador1.value
    umbral2 = deslizador2.value
    umbral3 = deslizador3.value


    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
       if (data[i] > umbral1){
         data[i] = umbral1;
       }

       if (data[i+1] > umbral2){
         data[i+1] = umbral2;
       }

       if (data[i+2] > umbral3){
         data[i+2] = umbral3;
       }
     }
   }


   function grises() {

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
  //  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData = ctx.getImageData(0, canvas.height/2, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    data = imgData.data


    for (var i = 0; i < data.length;i +=4) {
      light = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
        data[i] = light;
        data[i+1] = light;
        data[i+2] = light;
    }
  }


  //-- Funcion de retrollamada del deslizador rojo
  deslizador1.oninput = () => {
    filtro();
    ctx.putImageData(imgData, 0, 0);
 }

 //-- Funcion de retrollamada del deslizador verde
 deslizador2.oninput = () => {
   filtro();
   ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador azul
deslizador3.oninput = () => {
  filtro();
  ctx.putImageData(imgData, 0, 0);
}

gris.onclick = () => {
    grises();
    //-- Poner la imagen modificada en el canvas:
    ctx.putImageData(imgData, 0, canvas.height/2);
    //ctx.putImageData(imgData, 0, 0);

  }


}
