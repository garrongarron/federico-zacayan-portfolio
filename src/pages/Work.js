import eventBus from "../basic/EventBus.js";
import FeaturedProjects from '../components/FeaturedProjects.js'
import FeaturedProjectsTheWarrior from '../components/FeaturedProjectsTheWarrior.js'
import FeaturedProjectsKiwi from '../components/FeaturedProjectsKiwi.js'
import FeaturedProjectsVideoPlatform from '../components/FeaturedProjectsVideoPlatform.js'
import FeaturedProjectSoccer from '../components/FeaturedProjectSoccer.js'
import FeaturedProjectsPizarraBasica from '../components/FeaturedProjectsPizarraBasica.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'






function Work() {
    this.enableSubComponents({FeaturedProjectsKiwi, FeaturedProjects, FeaturedProjectsTheWarrior,
         FeaturedProjectsVideoPlatform, FeaturedProjectSoccer,FeaturedProjectsPizarraBasica,  Projects, Footer})
    this.goto = () => {
        eventBus.dispatch('routing', '/index.html')
    }
    this.enableEvents(['click'])
    return `
    <div class="container work">
        <div>
            <h1><span class="title"> Some Things I’ve Built </span></h1>
           
            <FeaturedProjectsKiwi></FeaturedProjectsKiwi>
            <FeaturedProjectsTheWarrior></FeaturedProjectsTheWarrior>
            <FeaturedProjectsVideoPlatform></FeaturedProjectsVideoPlatform>
            <FeaturedProjectSoccer></FeaturedProjectSoccer>
            <FeaturedProjectsPizarraBasica></FeaturedProjectsPizarraBasica>
            <Projects></Projects>
            <div style="position:fixed; bottom:50%; width:100%; left:-50%; z-index:1; transform: rotateZ(-90deg) translateY(30px);"><Footer></Footer></div>
        </div>
        
    </div>`
}

export default Work;