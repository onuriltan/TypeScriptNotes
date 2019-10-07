export class CustomMap {
  private googleMap: google.maps.Map;
  lat: number;
  lng: number;

  constructor(lat: number, lng: number, divId: string) {
    this.lat = lat;
    this.lng = lng;
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 5,
      center: {
        lat: this.lat,
        lng: this.lng
      }
    });
  }
}
