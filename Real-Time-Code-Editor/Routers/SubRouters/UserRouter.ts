import {Router} from "express";
class UserRouter{
    router :Router

    constructor() {
        this.router =Router()
        this.initialRoutes()
    }
    initialRoutes():void{

    }

}
const userROuter:UserRouter =new UserRouter()
export default userROuter;