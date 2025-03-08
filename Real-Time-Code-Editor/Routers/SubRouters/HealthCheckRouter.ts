import {Router} from "express";

class HealthCheckRouter{

    router : Router
    healthCheck :HealthCheck

    constructor() {
        this.router =Router()
        this.healthCheck = new HealthCheck()
        this.initialRouters()
    }

    initialRouters():void{
        this.router.get('/healthCheck',this.healthCheck.checkHealth)
    }
}
const healthCheck:HealthCheckRouter =new
    HealthCheckRouter()

export default healthCheck;