import cache from "./Cache.js"
import eventBus from "./EventBus.js"
import routes from "../pages/routes.js"
import getComponent from "../../js/FunctionalComponent.js"

class Routing {
    constructor() {
        eventBus.subscribe('routing', this.goto)
        this.prev = null
        this.cache = {}
    }
    closePage = (component) => {
        cache.appendChild(component.node)
    }
    goto = (route) => {
        if (routes[route] instanceof Promise) {
            routes[route].then(Module => {
                if(!this.cache[route]){
                    let component = getComponent(Module)
                    component.kiwiSelector('body')
                    this.cache[route] = component
                }
                this.redirect(route)
            }).catch(err => {
                console.error('error', err);
            })
        }
    }
    redirect = (route) => {
        // let node = this.cache[route].exec()
        let node = this.cache[route].node
        history.pushState({ page: route }, null, route)
        if (this.prev) this.closePage(this.prev)
        document.body.appendChild(node)
        this.prev = this.cache[route]
    }
    restore = (route) => {
        if (this.prev) this.closePage(this.prev)
        let node = this.cache[route].node
        document.body.appendChild(node)
        this.prev = this.cache[route]
    }
    start() {
        this.goto(location.pathname)
        window.addEventListener('popstate', this.onpopstate)
    }
    onpopstate = (e) => {
        if (!e.state) return
        this.restore(e.state.page)
    }
}

export default Routing