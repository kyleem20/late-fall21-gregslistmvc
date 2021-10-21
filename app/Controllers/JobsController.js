import { ProxyState } from "../AppState.js"


function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => template += job.Template)
  document.getElementById('listings').innerHTML = template
}
export class JobsController {

  constructor() {
    ProxyState.on('jobs', _drawJobs)
  }

}








//https://www.ultraboardgames.com/the-game-of-life/gfx/game1.jpg