'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map , mapEvent;




class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(coords,distance,duration){
        this.coords = coords;      // [lat,lng]
        this.distance = distance;  //  in km
        this.duration = duration;   /// in min
    }
}

class Running extends Workout{
    constructor(coords,distance,duration,cadence){
        super(coords,distance,duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace;
    }
};


class Cycling extends Workout{
    constructor(coords,distance,duration,elevationGain){
        super(coords,distance,duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed(){
        this.speed = this.distance/(this.duration/60);
        return this.speed;
    }
};



const run1 = new Running([39,12],5.2,24,178);
const cycl1 = new Cycling([39,12],5.2,24,178);
console.log(run1);
console.log(cycl1);



///////////////////////////////////////////////////////////
///////// apllication architecture
class App {
    #map;
    #mapEvent;
    constructor(){
        this._getPosition();
        //////////////////////// eventlisternrs
        form.addEventListener('submit', this._newWorkout.bind(this));
        ///////////////// cycling change wala
        inputType.addEventListener('change',this._toggleElevationField);
    }

    _getPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
            alert `can't get your current location`
        })
        }
    }

    _loadMap(position){
            // console.log(position);
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
            const coords = [latitude,longitude];
            this.#map = L.map('map').setView(coords, 13);
            // console.log(map)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
            //// handling clicks on map
            this.#map.on('click', this._showForm.bind(this));
            
    }


    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField(){
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }


    _newWorkout(e){
        e.preventDefault();


        /////////////get data from form
        const type = inputType.value;
        const distance = +inputDistance.value
        const duration = +inputDuration.value



        ///////// check if data is valid

        //////// if workout running , create runing object
        if(type === 'running'){
            const cadence = +inputCadence.value
            /////// check data is valid
            if(!Number.isFinite(distance) && !Number.isFinite(duration) &&!Number.isFinite(elevation)) 
            return alert(`input has to be positive numbers!`)
        }


        /////// if workout is cycling , create cycling object 
        if(type === 'cycling'){
            const elevation = +inputElevation.value
        }


        //////// add new object to workout array


        ///////////// render workout on map as marker
        const {lat,lng} = this.#mapEvent.latlng;
    
            L.marker([lat,lng])
            .addTo(this.#map)
            .bindPopup(
                L.pop({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup',
                })).setPopupContent('hello world').openPopup();



        //////////////// now clear the input field 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        /////// display the marker here
        
    }
}



const app = new App();
app._getPosition(); 








