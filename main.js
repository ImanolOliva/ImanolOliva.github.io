
function initMap(){
    const argCoords = {lat: -33.61 , lng: -63.61}; 
    const map = new google.maps.Map( mapDiv, {
        center: argCoords,
        zoom:6,
    });
    const marker = new google.maps.Marker( {
        position: argCoords, 
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
                    map.setZoom(7);
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