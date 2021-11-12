function ExperienceDescription6(){
    let a = [
        `Comprehensive development of management solutions for collection, debts and entry desk of "Obra Social Ospra" (health prepay company service).`
        ,`I have developed web modules of consulting, reporting and tracking debts, and services provided by prepaid company service.`
        ,`Stack: PHP5, Cake Framework PHP, OOP, Javascript & Jquery, Ajax, MySQL, Stored Procedures, Functions, Views.`
        
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">TRENTISA S.A.</span>
        </div>
        <span class="second-line">
            2011 - 2012
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription6