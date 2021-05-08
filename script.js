function load() {

    var message = document.getElementById('msg')
    var folderName
    
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    const interval = setInterval(() =>{
        const now = new Date()
        var hourTime = now.getHours()
        var minuteTime = now.getMinutes()
        const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) +
                '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' +
                zeroFill(minuteTime)
        document.getElementById('data-hora').innerHTML = dataHora
        currentImage(hourTime)
    }, 2000) 
        
    function currentImage(hourTime){       
        if(hourTime >= 0 && hourTime < 5) {
            folderName = 'dawn'
            nextImage()
            message.innerHTML = `Good Morning!`        
            document.body.style.background = '#6495ED'
        }else if(hourTime > 5 && hourTime < 12){
            folderName = 'morning'
            nextImage()
            message.innerHTML = `Good Morning!`
            document.body.style.background = '#F5B041'
        }else if(hourTime >= 12 && hourTime < 16){
            folderName = 'afternoon'
            nextImage()
            message.innerHTML = `Good Afternoon!`          
            document.body.style.background = '#4682B4'
        }else if(hourTime >= 16 && hourTime < 19){
            folderName = 'sunsets'
            nextImage()
            message.innerHTML = `Have a nice sunset!`
            document.body.style.background = '#E84B25'
        }else{
            folderName = 'night'
            nextImage()
            message.innerHTML = `Good Evening!`
            document.body.style.background = '#283747'
        }
        
    }

    let id = 1 

    function restartCarousel(){ 
        (id >= 4) ? id = 1 : id++
    }

    function nextImage() {
        let picture = `./img/`+folderName+`/`+id+`.jpg`
        document.getElementById('img').setAttribute('src', picture)
        restartCarousel()
    }

}



