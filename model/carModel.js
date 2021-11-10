class CarModel {
  constructor(
    carId,
    companyId,
    name,
    coverPhoto,
    battery,
    range,
    speed,
    horse,
    torque,
    startPrice,
    youtube,
    description
  ) {
    this.carId = carId;
    this.companyId = companyId;
    this.coverPhoto = coverPhoto;
    this.battery = battery;
    this.range = range;
    this.speed = speed;
    this.horse = horse;
    this.torque = torque;
    this.name = name;
    this.startPrice = startPrice;
    this.youtube = youtube;
    this.description = description;
  }
}
export default CarModel;