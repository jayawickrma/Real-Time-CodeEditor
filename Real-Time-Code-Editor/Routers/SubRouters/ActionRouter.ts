import {Router} from "express";
import ActivityController from "../../Controller/ActivityController";

class ActionRouter{
    router : Router
    actionController : ActivityController

    constructor() {
        this.router =Router()
        this.actionController =new ActivityController()
        this.initialRouters()
    }
    initialRouters():void{
        this.router.post('/addAction',this.actionController.createAction)
    }
}
const actionRouter:ActionRouter =new ActionRouter()
export default actionRouter