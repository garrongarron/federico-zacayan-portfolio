function ExperienceDescription7(){
    let a = [
        ` I have maintained an ecommerce platform (of game selling) updating products details and I have built an intraweb game as part of a junior team.`
        ,`We have used an approach of Scrum methodology (with daily meetings) and using Kanban to assign the day tasks (prioritised by team leader).`
        ,`I have updated product codes, images and text for the ecommerce platform. I have designed, developed, and implemented a gamble game (intra office) of guessing the result of the matches of football soccer in a championship.`
        ,`Stack: PHP5, OOP, CSS, Javascript & Jquery, Ajax, MySQL. Agile Methodologies: Scrum`
        
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">GAMELOFT S.A</span>
        </div>
        <span class="second-line">
            2010 - 2011
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription7