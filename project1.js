window.onload = function() {
    document.getElementById("btn-restart").addEventListener("click", function(){
        let timeInterval = document.getElementById("timer").value;
        let newTime= parseInt(timeInterval*1000);
        $('.carousel').carousel({
            interval: newTime,
          })
        // var myCarousel = document.querySelector('#carouselExampleDark')
        // myCarousel.interval = newTime;
        // myCarousel.pause = 'hover';
        // myCarousel.wrap = false;
        // myCarousel.touch = true;
        // var carousel = new bootstrap.Carousel(myCarousel, {
        // interval: `${newTime}`,
        // wrap: false,
        // pause: 'hover',
        // ride: carousel,
        // touch: true
        // })
        document.getElementById("timer").value= "";
    })
}