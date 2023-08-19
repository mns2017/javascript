if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude = position.coords;
        const longitude = position.coords;
        console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
    },function(){
        alert `sorry can't get your location`;
    })
}