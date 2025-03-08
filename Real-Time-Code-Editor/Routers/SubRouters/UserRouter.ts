import {Router} from "express";
import UserController from "../../Controller/UserController";
class UserRouter{
    router :Router
    userController:UserController

    constructor() {
        this.router =Router()
        this.userController =new UserController()
        this.initialRoutes()
    }
    initialRoutes():void{
            this.router.post('/signIn',this.userController.signIn)
            this.router.post('/signUp',this.userController.signUp)
    }

}
const userROuter:UserRouter =new UserRouter()
export default userROuter;