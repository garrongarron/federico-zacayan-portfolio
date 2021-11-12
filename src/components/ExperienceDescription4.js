function ExperienceDescription4(){
    let a = [
        `Description:  Operations support systems. We have developed web solutions for administration and monitoring of telecommunications providing systems (satellite internet) integrating this web panel/dashboard from back to front-end services which are connected with the provider services.`
        ,`I have resolved several kinds of issues, but I always accompanied the solutions with unit tests (TDD),  because we were working with complex OOP house made software in PHP.`
        ,` I have developed dashboards with forms to search and admin provisioning service. Taking part in the estimation process in  organizing tasks for the next weeks.`
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">INTRAWAY CORP</span>
        </div>
        <span class="second-line">
            2014 - 2015
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription4