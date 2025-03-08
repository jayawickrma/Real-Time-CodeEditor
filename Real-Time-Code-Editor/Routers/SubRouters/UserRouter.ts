import {Router} from "express";
import UserController from "../../Controller/UserController";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
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
            this.router.post('/signUp',upload.single('image'),this.userController.signUp)
    }

}
const userROuter:UserRouter =new UserRouter()
export default userROuter;