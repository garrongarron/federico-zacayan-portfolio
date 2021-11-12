import eventBus from "../basic/EventBus.js";

function Courses() {
    this.goto = () =>{
        eventBus.dispatch('routing', '/index.html')
    }
    this.enableEvents(['click'])
    return `<h1 click="goto">Courses</h1>`
}

export default Courses;