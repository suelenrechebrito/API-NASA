const recebeDate = document.querySelector('#date');

const submit = document.querySelector('#envio');
    submit.addEventListener('click', function () {
        let api = `https://api.nasa.gov/planetary/apod?api_key=hfuhQwYnRgsMoa2aI030oHe4BdU2RxevhnRoWwNv&date=${data.valeu}`;
        let requisicao = new XMLHttpRequest ( );
        requisicao.open ('GET', api);
        requisicao.onload = function (){
            const imgObj = JSON.parse (requisicao.response);
            const divIMG = document.querySelector('#imagem');
            let imgDay = document.createElement('img');
                divIMG.append(imgDay);
            const divVideo = document.querySelector('#video');
            let videoDay = document.createElement('video');
                    divVideo.append(videoDay);
            const divConteudo = document.querySelector('#conteudo');
            let contDay = document.createElement('p');
                    divConteudo.append(contDay);
                    contDay.innerText = imgObj.explanation

                    if (imgObj.media_type != "video") {

                        imgDay.setAttribute("src", imgObj.url)
                        imgDay.style.display = 'flex'
                                  
            
                    } else {
            
                        videoDay.setAttribute("src", imgObj.url)
                        imgDay.style.display = 'none'
                        videoDay.style.display = 'flex'
            
                    }
            
                }

                requisicao.send();
            
            });


