import {Router} from "express";

class MainRouter{
    router : Router

    constructor() {
        this.router =Router()
        this.router.use('/codeSnippet',)
    }
}
const mainRouter:MainRouter =new MainRouter()
export default mainRouter;