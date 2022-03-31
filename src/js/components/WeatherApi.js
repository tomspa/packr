class WeatherApi extends HTMLElement {
    key;
    input;
    wrapperDiv;
    apiInfoDiv;
    label;
    temperature;
    city;
    img;
    wrapper;
    lastCity;

    constructor() {
        super();
        this.key = "8994334daae74951b05111214222903";
        this.create();
        this.listeners();
    }

    create() {
        this.wrapperDiv = document.createElement("div");
        this.wrapperDiv.classList.add("weather-api-wrapper");

        this.apiInfoDiv = document.createElement("div");
        this.apiInfoDiv.classList.add("weather-api-wrapper");

        this.imgWrapper = document.createElement("div");
        this.imgWrapper.classList.add("weather-api-img-wrapper");

        this.input = document.createElement("input");
        this.input.setAttribute("type", "text");
        this.input.setAttribute("name", "weather-input");
        this.input.setAttribute("id", "weather-input");

        this.label = document.createElement("label");
        this.label.setAttribute("for", "weather-input");
        this.label.innerHTML = "Kies een stad";

        this.temperature = document.createElement("h1");
        this.temperature.innerHTML = "--°";

        this.city = document.createElement("div");
        this.city.innerHTML = "----";

        this.img = document.createElement("img");

        this.wrapperDiv.appendChild(this.label);
        this.wrapperDiv.appendChild(this.input);

        this.apiInfoDiv.appendChild(this.temperature);
        this.apiInfoDiv.appendChild(this.city);

        this.imgWrapper.appendChild(this.apiInfoDiv);
        this.imgWrapper.appendChild(this.img);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrap");

        this.wrapper.appendChild(this.imgWrapper);
        this.wrapper.appendChild(this.wrapperDiv);

        this.appendChild(this.wrapper);
    }

    listeners() {
        this.input.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                fetch("http://api.weatherapi.com/v1/current.json?key=" +
                        this.key + "&q=" + this.input.value + "&aqi=no")
                    .then((response) => {
                        if (response.status >= 200 && response.status <= 299) {
                            return response.json();
                        } else {
                            throw Error(response.statusText);
                        }
                    })
                    .then((json) => {
                        this.lastCity = json.location.name;
                        this.city.innerHTML = json.location.name;
                        this.temperature.innerHTML = json.current.temp_c + "°";
                        this.img.src = json.current.condition.icon;
                        this.label.style.color = "grey";
                    }).catch((error) => {
                        this.label.style.color = "red";
                    });
            }
        });
    }

    alertFill() {
        this.label.style.color = "red";

        setTimeout(() => {
            this.label.style.color = "gray";
        }, 2000);
    }
}

export default WeatherApi;