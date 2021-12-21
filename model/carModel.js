class CarModel {
  constructor(
    carId,
    companyId,
    name,
    cover,
    battery,
    range,
    speed,
    horse,
    torque,
    startPrice,
    youtube,
    description,
    company,
    type,
    isIndian,
    TestDrive,
    sideView
  ) {
    this.carId = carId;
    this.companyId = companyId;
    this.cover = cover;
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
    this.isIndian = isIndian;
    this.TestDrive = TestDrive;
    this.sideView = sideView
  }
}
export default CarModel;
