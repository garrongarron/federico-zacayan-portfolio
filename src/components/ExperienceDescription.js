function ExperienceDescription(){
    let a = [1,2,3,4]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">Position</span> 
            <span class="company">@</span>
            <span class="company">Company</span>
        </div>
        <span class="second-line">
            July - December 2017
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription