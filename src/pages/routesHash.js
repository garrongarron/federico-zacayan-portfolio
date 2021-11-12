let routes = {
    get '#index'() {
        return (async () => {
            let module = await import('../pages/Landing.js')
            return module.default
        })()
    },
    get '#projects'() {
        return (async () => {
            let module = await import('../pages/Work.js')
            return module.default
        })()
    },
    get '#experience'() {
        return (async () => {
            let module = await import('../pages/Experience.js')
            return module.default
        })()
    },
    get '#aboutme'() { 
        return (async () => {
            let module = await import('../pages/AboutMe.js')
            return module.default
        })()
     },
}; 

export default routes;