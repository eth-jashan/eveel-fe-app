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
    description,
    company,
    type
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
    this.company = company;
    this.type = type;
  }
}
export default CarModel;