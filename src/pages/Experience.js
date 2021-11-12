import eventBus from "../basic/EventBus.js";
import ExperienceDescription1 from '../components/ExperienceDescription1.js'
import ExperienceDescription2 from '../components/ExperienceDescription2.js'
import ExperienceDescription3 from '../components/ExperienceDescription3.js'
import ExperienceDescription4 from '../components/ExperienceDescription4.js'
import ExperienceDescription5 from '../components/ExperienceDescription5.js'
import ExperienceDescription6 from '../components/ExperienceDescription6.js'
import ExperienceDescription7 from '../components/ExperienceDescription7.js'
import Footer from '../components/Footer.js'

function Experience() {
    this.beforeAppendChild = (parent) =>{
        let node = parent.children[0]
        let content = node.querySelectorAll('.descriptions li.description')
        let names = node.querySelectorAll('.names li')
        let clear = () => {
            content.forEach(node=>node.style.display = 'none')
            names.forEach(node=>node.classList.remove('selected'))
        }
        names.forEach((li, index)=>{
            li.addEventListener('click', ()=>{
                clear()
                li.classList.add('selected')
                content[index].style.display = 'block'
            })
        })
        
    }
    this.enableSubComponents({
        ExperienceDescription1,
        ExperienceDescription2,
        ExperienceDescription3,
        ExperienceDescription4,
        ExperienceDescription5,
        ExperienceDescription6,
        ExperienceDescription7,
        Footer
    })
    this.goto = () => {
        eventBus.dispatch('routing', '/index.html')
    }
    this.enableEvents(['click'])
    return `
    <div class="container experience">
        <div>
            <h1><span class="title"> Where I’ve Worked </span></h1>
            <div class="table">
                <ul class="names">
                    <li class="selected">Production Ministry</li>
                    <li>Huenei</li>
                    <li>Terra</li>
                    <li>Intraway</li>
                    <li>Piramide</li>
                    <li>Trentisa </li>
                    <li>Gameloft </li>
                </ul>
                <ul class="descriptions">
                    <ExperienceDescription1></ExperienceDescription1>
                    <ExperienceDescription2></ExperienceDescription2>
                    <ExperienceDescription3></ExperienceDescription3>
                    <ExperienceDescription4></ExperienceDescription4>
                    <ExperienceDescription5></ExperienceDescription5>
                    <ExperienceDescription6></ExperienceDescription6>
                    <ExperienceDescription7></ExperienceDescription7>
                </ul>
            </div>
            <a rel="noreferrer"  href="https://docs.google.com/document/d/1EU_7xFx-MfAn6WwJQ2F1nda9W7dqocwawuvFTKMFdhY/edit" class="resume" target="_blank">Resume</a>
            <Footer></Footer>
        </div>
    </div>`
}

export default Experience;