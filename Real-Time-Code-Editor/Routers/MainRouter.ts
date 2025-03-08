import {Router} from "express";

class MainRouter{
    router : Router

    constructor() {
        this.router =Router()
    }
}
const mainRouter:MainRouter =new MainRouter()
export default mainRouter;