class Fish {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.maxFoodAllowed = FishTank.foodRequired[type];
  };

  foodLeftToFeedFish() {
    return this.maxFoodAllowed
  };
};

class FishTank {
  constructor() {
    this.fish = [];
  };

  static foodRequired = {
    Goldfish: 0.1,
    'Angel fish': 0.2,
    'Babel fish': 0.3
  };

  static getFishTypes() {
    return Object.keys(this.foodRequired);
  };

  addFish(name, type) {
    if (!FishTank.foodRequired[type]) {
      throw new Error(`${type} is not an allowed fish type.`);
    };
    const newFish = new Fish(name, type);
    this.fish.push(newFish);
  };

  getFish() {
    return this.fish;
  };

  static addFishType(newFishType, newFoodRequired) {
    if (this.foodRequired[newFishType]) {
      throw new Error(`${newFishType} already exists in the allowed types.`);
    };
    this.foodRequired[newFishType] = newFoodRequired;
  }

  static removeFishType(selectedType) {
    if (!this.foodRequired[selectedType]) {
      throw new Error(`${selectedType} does not exist in the allowed types.`);
    };
    delete this.foodRequired[selectedType];
  };
};

export { Fish, FishTank }