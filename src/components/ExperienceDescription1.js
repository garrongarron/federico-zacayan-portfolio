function ExperienceDescription1(){
    let a = [
        `Documenting data-flow of time-boards, written in php language, in all Production Ministry offices to redesign the performance ratios presentations.`
        ,` Analysis  and implementation of SOAP web services consumers in an automation of validations of  imported home appliances based on documentation provided.`
        ,`Fixing failed cases in the automatic validations process.`
        ,`Develop of automatic functional tests in web applications. Documentation of the deployment process in php applications in production, test and development environments.`
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">Production Ministry</span>
        </div>
        <span class="second-line">
            2018 - 2018
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription1