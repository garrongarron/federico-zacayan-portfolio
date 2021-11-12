let lazy = async (filename) => {
    let module = await import(`../pages/${filename}`)
    return module.default
}

let routes = {
    // get '/index.html'(){ return lazy('Experience.js')},
    get '/index.html'(){ return lazy('Landing.js')},
    get '/projects.html'(){ return lazy('Work.js')},
    get '/experience.html'(){ return lazy('Experience.js')},
    get '/aboutme.html'(){ return lazy('AboutMe.js')},
};

export default routes;