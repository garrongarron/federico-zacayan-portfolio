function ExperienceDescription3(){
    let a = [
        `I have worked in the “Business Development Management” area reporting straight to the Manager,  providing maintenance of the mails server in linux, making reports and liquidations directly from the database.`
        ,`Development of APIs (WEB SERVICES) for the provision of digital services, such as antivirus software (McAfee products), email service (@speedy.com), mobile applications subscriptions.`
        ,`Design of end-to-end testing of several mobile applications (Family Locator, Multi-Device Antivirus, Terabox).`
        ,` Implementing a mailing campaign to encourage product usage. Our main client was Telefónica of Argentina (now Movistar).`
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company"> TERRA NETWORKS S.A.</span>
        </div>
        <span class="second-line">
            2015 - 2017
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription3