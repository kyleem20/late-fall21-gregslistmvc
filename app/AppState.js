import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]

  houses = [
    new House({ year: 1982, sqrfeet: '6,345 square feet', city: 'Boise', state: 'Idaho', description: 'Library, parlor, servants\' quarters, marble fireplaces, wraparound porch.', price: 570000, imgUrl: 'https://cdn.apartmenttherapy.info/image/upload/v1607977222/at/art/design/2020-12/game-of-life-essay/game-of-life-infeed-1.jpg' }),
    new House({ year: 1997, sqrfeet: '2,586 square feet', city: 'Caldwell', state: 'Idaho', description: 'Was one level before the quake. Now a real fixer-upper for adventurous folks.', price: 100000, imgUrl: 'https://i.imgur.com/p2KFPkx.jpg' }),
    new House({ year: 1940, sqrfeet: '1,267 to 6,345 square feet', city: 'Local-ish', state: 'Idaho', description: 'Lottery houses. Buy a ticket to get a chance to switch your house and win any of these houses!! Bargain deals!', price: 1001700, imgUrl: 'https://cf.geekdo-images.com/Du6Ixtz3dsIJzvQaSF6BhA__large/img/8ldTX2VaM2Rs-YhEY43MuX-VoN8=/fit-in/1024x1024/filters:no_upscale():strip_icc()/pic131333.jpg' }),
  ]

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
