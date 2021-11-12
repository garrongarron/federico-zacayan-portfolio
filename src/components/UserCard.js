import eventBus from "../basic/EventBus.js"

function UserCard(){
    this.goto = () => {
        eventBus.dispatch('routing', '/aboutme.html')
    }
    this.enableEvents(['click'])
    return `
    <div class="user-card" click="goto">
        <img alt="Federico Zacayan" src="https://avatars.githubusercontent.com/u/23292341?s=400&u=ad49b3cfa0f860e9e4bf1699030b736f1c3adf77&v=4">
        <h1  class="fz-color-2">Federico Zacayan</h1>
        <hr/>
        <p>World class developer</p>
    </div>`
}

export default UserCard