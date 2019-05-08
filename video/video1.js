function main()
{

  //-- Obtener el elemento de video
  mainvideo = document.getElementById("mainvideo")
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")

  //-- Establecer el tamaño del vídeo
  mainvideo.width = 600;
  mainvideo.height = 400;
  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;




  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"



  //-- Boton de Play
  play = document.getElementById('play')
  stop = document.getElementById('stop')

  //--funcion realizador
  function realizador(){
    if ( mainvideo.src == video1.src){
      mainvideo.src = video2.src;
      mainvideo.currentTime = video2.currentTime;
    }else if (mainvideo.src == video2.src) {
      mainvideo.src = video3.src;
      mainvideo.currentTime= video3.currentTime;
    }else if(mainvideo.src == video3.src){
      mainvideo.src = video1.src;
      mainvideo.currentTime= video1.currentTime;
    }
  }

  //-- clicks

  play.onclick = () => {
    mainvideo.src = video1.src;
    mainvideo.currentTime= video1.currentTime;
    p = setInterval(realizador,2000);

  }
  stop.onclick = () => {
    mainvideo.src = null;
    clearInterval(p)
  }
}
