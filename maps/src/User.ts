import faker from 'faker';
import { Marker } from './CustomMap';

export class User implements Marker {
  color: string = 'red';
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent() {
    return `User name is ${this.name}`;
  }
}
