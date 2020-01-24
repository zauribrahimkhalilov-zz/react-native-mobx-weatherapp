import { decorate, observable, action } from "mobx";

API_KEY = 'YOUR_API_KEY';

class Store {

    text = '';

    updateText = (text) => {
        this.text = text;
    }

    data = null;

    searchCountry = () => {
        fetch(`https://openweathermap.org/data/2.5/forecast?q=${this.text}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setData(data));
    };

    setData = (data) => {
        this.data = data;
    };

}

decorate(Store, {
    text: observable,
    updateText: action,
    data: observable,
    searchCountry: action,
    setData: action,
});

export default new Store();