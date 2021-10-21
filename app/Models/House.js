import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.sqrfeet = data.sqrfeet
    this.city = data.city
    this.state = data.state
    this.description = data.description
    this.price = data.price
    this.imgUrl = data.imgUrl
  }
  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="car-img rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p><b>Built in ${this.year} - ${this.sqrfeet}</b></p>
          <p> ${this.city}, ${this.state}</p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <div style="background-color: ${this.color}" class="color-swatch mx-2"></div>
            <p class="m-0 text-center"><em>$${this.price}</em></p>
            </div>
            <div class="text-end">
            <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }

}
