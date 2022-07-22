

function initMap(){
    const tempCoords = {lat:-34.7655977 , lng: -58.3802391}; 
    const map = new google.maps.Map( mapDiv, {
        center: tempCoords,
        zoom:6,
    });
    const marker = new google.maps.Marker( {
        //position: tempCoords, 
        map,
    }); 

    button.addEventListener('click', ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                ({coords:{latitude , longitude} }) =>{
                    const coords = {
                        lat: latitude,
                        lng: longitude,
                    };
                    map.setCenter(coords);
                    marker.setPosition(coords);
                    map.setZoom(12);
                },
                () => {
                    alert("Tu navegador falla tiene un error")
                }
            );
        }else{
            alert("Tu navegador no dispone de geolocalizacion. Actualixalo")
        }
    })

}