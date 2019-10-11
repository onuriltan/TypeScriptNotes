import faker from 'faker';
import { Marker } from './CustomMap';

export class Company implements Marker {
  color: string = 'blue';
  name: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent() {
    return `
      <div>
        <h1> Company name: ${this.name} </h1>
        <h3> CatchPhrase: ${this.catchPrase} </h3>
      </div>
   `;
  }
}
