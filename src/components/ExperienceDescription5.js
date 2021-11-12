function ExperienceDescription5(){
    let a = [
        `I have developed web solutions for the tracking of car accidents in automobile insurance service of Brazil's Zurich  and Venezuela's Zurich.`
        ,`I have maintained  the integration systems between TIA and AS400 systems, with platform web in the company. In a Service Level Agreement framework.`
        ,`I have provided preventive and evolutionary maintenance of PHP web applications, developed well documented requirements, released packages to implement in test environments, providing support to testers and functional analysts in their tasks.`
        ,`I researched and generated datasets to replicate production issues cases. Analysing stored procedures (T-SQL) and updating them according to requirements.`
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">PIRAMIDE TECHNOLOGIES S.A.</span>
        </div>
        <span class="second-line">
            2013 - 2014
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription5