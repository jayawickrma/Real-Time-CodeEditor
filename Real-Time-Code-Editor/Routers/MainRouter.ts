import {Router} from "express";
import codeSnippet from "./SubRouters/CodeSnippetRouter";
import userRouter from "./SubRouters/UserRouter";
import actionRouter from "./SubRouters/ActionRouter";

class MainRouter{
    router : Router;

    constructor() {
        this.router =Router()
        this.router.use('/codeSnippet',codeSnippet.router)
        this.router.use('/action',actionRouter.router)
        this.router.use('/auth',userRouter.router)
    }
}
const mainRouter:MainRouter =new MainRouter()
export default mainRouter;