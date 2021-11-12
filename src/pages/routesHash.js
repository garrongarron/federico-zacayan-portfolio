let lazy = async (filename) => {
    let module = await import(`../pages/${filename}`)
    return module.default
}

let routes = {
    get '#index'(){ return lazy('Landing.js')},
    get '#projects'(){ return lazy('Work.js')},
    get '#experience'(){ return lazy('Experience.js')},
    get '#aboutme'(){ return lazy('AboutMe.js')},
};

export default routes;