

class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // {lat: 0.334354, lng: 0.3400945}
        this.id = new Date().toString() + Math.random().toString();
    }
}

export default Place;