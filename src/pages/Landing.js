import eventBus from "../basic/EventBus.js";
import UserCard from "../components/UserCard.js";
import Footer from "../components/Footer.js";

function Landing() {
    this.useEffect(() => {
        //  document.head.querySelector('title').innerHTML = 'AAAAAAAA'
    })
    
    this.enableSubComponents({UserCard, Footer});
    
    return `
    <div class="container landing">
        <div>
            <UserCard></UserCard>
        </div>
    </div>
    `
}

export default Landing;