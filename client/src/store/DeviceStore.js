import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 2,
        name: 'Смартфоны',
      },
      {
        id: 3,
        name: 'Ноутбуки',
      },
      {
        id: 4,
        name: 'Телевизоры',
      },
    ];
    this._brands = [
      {
        id: 1,
        name: 'hello',
      },
      {
        id: 2,
        name: 'world',
      },
    ];
    this._devices = [
      {
        id: 1,
        name: 'hello',
      },
      {
        id: 2,
        name: 'world',
      },
    ];
    this.selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this.selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
