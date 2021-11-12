import eventBus from "../basic/EventBus.js"

function Footer() {
    this.goto = (e) => {
        e.currentTarget.dataset.page
        eventBus.dispatch('routing', e.currentTarget.dataset.page)
    }
    this.enableEvents(['click'])
    return `
    <div class="footer">
        <ul>
            <li click="goto" data-page="/aboutme.html">About</li>
            <li click="goto" data-page="/experience.html">Experience</li>
            <li click="goto" data-page="/projects.html">Work</li>
        </ul>
    </div>`
}

export default Footer