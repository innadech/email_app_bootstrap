const car = {
  price: '',
  brand: '',
  setBrand(brand) {
    this.brand = brand
  },
  getBrand() {
    return this.brand
  },
}
let carBrand = car.getBrand()
carBrand
