// id, value, label, primaryColor
class FoodCategory {
  id: string;
  value: string;
  label: string;
  primaryColor: string;

  constructor(id: string, value: string, label: string, primaryColor: string) {
    this.id = id;
    this.value = value;
    this.label = label;
    this.primaryColor = primaryColor;
  }
}

export default FoodCategory;
