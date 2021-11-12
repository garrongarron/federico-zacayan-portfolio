import Project from './Project.js'
function Projects(){
    this.enableSubComponents({Project})
    let prop = [
        { header : 'Router with ES6', 
        paragraph : 'A small project that allow to make <b>Lazy Load</b> of <b>ES6 Modules</b> and it is integrated with <b>History</b> API.', 
        tags : ['History','Router', 'ES6'], external : null, git : 'https://github.com/garrongarron/Routing-With-JS-and-LazyLoad-ES6-modules' },

        { header : 'Audio Chat', paragraph : 'A <b>real time chat application</b> using <b>peer.js</b>, <b>socket.io</b>.',
         tags : ['Peer.js','Socket.io', 'Docker', 'Node.js', 'ssl', 'HTMLAudioElement', 'MediaDevices'], 
         external : 'https://voice-chat-rpg.herokuapp.com/', 
         git : 'https://github.com/garrongarron/audio-chat' },


        { header : 'Among us 3D WEB prototype', 
        paragraph : 'A prototype 3D game in HTML5 implementing models made by me with <b>Blender</b> using <b>Three.js</b>.', 
        tags : ['Blender','Three.js', 'Game Development'], 
        external : 'https://garrongarron.github.io/among-us-prototype-1/', 
        git : 'https://github.com/garrongarron/among-us-prototype-1/' },


        { header : 'Tutorial Api Rest (VUE)', paragraph : 'A hello world tutorial to build a client rest <b>API</b> with <b>Vue</b>.', tags : ['Vue','fetch', 'JavaScript', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-vue/', git : null },
        
        { header : 'Tutorial Api Rest (Angular)', paragraph : 'A hello world tutorial to build a client rest <b>API</b> with <b>Angular</b>.', tags : ['Angular','HttpClient ', 'Javascript', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-angular/', git : null },
        
        { header : 'Tutorial Api Rest (React)', paragraph : 'A hello world tutorial to build a client rest <b>API</b> with <b>React</b>.', tags : ['React','fetch', 'Javascript', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-react/', git : null },
        
        { header : 'Tutorial Api Rest (Python)', paragraph : 'A hello world tutorial to build a server rest <b>API</b> with <b>Flask</b> in <b>Python</b> language and persisting data with <b>sqlite</b> running in <b>Docker</b>.', tags : ['Python','Flask', 'Docker', 'sqlite', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-python/', git : null },
        
        { header : 'Tutorial Api Rest (Node.js)', paragraph : 'A hello world tutorial to build a server rest <b>API</b> with <b>Express</b> in <b>Node.js</b> language and persisting data with <b>MongoDB</b> running in <b>Docker</b>.', tags : ['Node','Express', 'Docker', 'MongoDb', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-node/', git : null },
        
        { header : 'Tutorial Api Rest (PHP - Laravel)', paragraph : 'A hello world tutorial to build a server rest <b>API</b> with <b>Laravel</b> in <b>PHP</b> language and persisting data with <b>Mysql</b> running in <b>Docker</b>.', tags : ['PHP','Laravel', 'Docker', 'Mysql', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-php/', git : null },
        
        { header : 'Tutorial Api Rest (PHP - Symfony)', 
        paragraph : 'A hello world tutorial to build a server rest <b>API</b> with <b>Symfony</b> in <b>PHP</b> language and persisting data with <b>Mysql</b> running in <b>Docker</b>.', tags : ['PHP','Symfony', 'Docker', 'Mysql', 'rest'], external : 'https://federicozacayan.github.io/tutorial/restful-api-symfony-4/', git : null },
        

        { header : 'Laravel Pasport Guide', 
        paragraph : 'This is a guide to implement <b>Passport</b> library into <b>Laravel</b> projects.', tags : ['PHP','Laravel',], 
        external : 'https://federicozacayan.github.io/Laravel-Passport/', git : null },

        { header : 'Other Laravel tutorials', 
        paragraph : 'This is a github URL with many <b>Laravel</b>  guides.', 
        tags : ['PHP','Laravel', 'Auth','Jobs', 'Mail ', 'Mails-Queue', 'Commands and Schedules', 'One-to-Many and Many-to-One', 'Upload-Files', 'Docker'], 
        external : null, git : 'https://github.com/federicozacayan?tab=repositories&q=laravel&type=&language=&sort=' },
        
        { header : 'Angular 101 tutorial', 
        paragraph : 'A tutorial of the Angular Basis, like "Send data to Sub-Component", "Receive data from Child", "how to make requests" or "Distribute States and Behaviour"', 
        tags : ['Angular', 'Form and Login', 'Components'], 
        external : 'https://federicozacayan.github.io/Angular-In-30-Seconds/index.html', git : null },

        { header : 'Angular with Bootstrap', 
        paragraph : 'A guide to install Bootstrap in Angular projects', 
        tags : ['Angular', 'Bootstrap'], 
        external : 'https://federicozacayan.github.io/Angular-with-Bootstrap/index.html', git : null },

        { header : 'Dependency Injection in Angular', 
        paragraph : 'An example of using Dependency Injection in Angular', 
        tags : ['Angular', 'Dependency Injection'], 
        external : 'https://federicozacayan.github.io/Dependency-Injection-in-Angular/index.html', git : null },

        
        { header : 'Angular Routing', 
        paragraph : 'An example of how to use routing in Angular', 
        tags : ['Angular', 'Routing'], 
        external : 'https://federicozacayan.github.io/Angular-Routing/index.html', git : null },


        
        


        
    ]
    this.dataProvider = () =>{
        
    }
    return`
    <div class="projects">
        <h4>Other Noteworthy Projects</h4>
        <small>view the archive</small>
        <ul>
            ${prop.map(a=>{
                return `<Project prop='${JSON.stringify(a).replace(/'/g, "&apos;")}'></Project>`
            })}
        </ul>
    </div>
    `
}

export default Projects