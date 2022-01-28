const getCatLogo = (data) => {
  switch (data) {
    case "tata":
      return require("../../../../assets/Images/Tata.png");

    case "hyundai":
      return require("../../../../assets/Images/Hyundai.png");

    case "morris garage":
      return require("../../../../assets/Images/MG.png");

    case "audi":
      return require("../../../../assets/Images/Audi.png");

    case "mercedes":
      return require("../../../../assets/Images/Mercedes.png");

    default:
      null;
  }
};

export default getCatLogo;
