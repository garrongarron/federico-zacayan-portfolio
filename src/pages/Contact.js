import eventBus from "../basic/EventBus.js";

function Contact() {
    this.goto = () =>{
        eventBus.dispatch('routing', '/index.html')
    }
    this.enableEvents(['click'])
    return `<h1 click="goto">Contact</h1>`
}

export default Contact;