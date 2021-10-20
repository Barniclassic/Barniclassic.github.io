window.onload = function() {
    document.getElementById("btn-restart").addEventListener("click", function(){
        let timeInterval = document.getElementById("timer").value;
        let newTime= parseInt(timeInterval*1000);
        var myCarousel = document.querySelector('#carouselExampleDark')
        var carousel = new bootstrap.Carousel(myCarousel, {
        interval: newTime,
        wrap: false,
        pause: 'hover',
        ride: carousel,
        touch: true
        })
        document.getElementById("timer").value= "";
    })
}