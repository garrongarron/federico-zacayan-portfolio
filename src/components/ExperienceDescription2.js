function ExperienceDescription2(){
    let a = [
        ` I used to provide packages ready to implement and already tested in a development environment to renew the look and feel of products, and adding new functionalities to the site (to quote car insurance).`
        ,`After receiving the front-end code I have implemented the client side Web service (SOAP) using PHP to retrieve and send data to the web service server.`
        ,`I have implemented a template engine (Twig) to render the HTML, CSS, and Javascript. `
        ,`Develop of automatic functional tests in web applications. Documentation of the deployment process in php applications in production, test and development environments.`
    ]
    return `
    <li class="description">
        <div class="first-line">
            <span class="position">PHP DEVELOPER</span> 
            <span class="company">@</span>
            <span class="company">HUENEI S.R.L</span>
        </div>
        <span class="second-line">
            2017 - 2018
        </span>
        <ul class="tasklist">
            ${a.map(e=>`<li>${e}</li>`)}
        </ul>
    </li>
    `
}

export default ExperienceDescription2