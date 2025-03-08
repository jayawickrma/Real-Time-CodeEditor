class HealthCheck{
    async checkHealth(req:any,resp:any){
        resp.json("API is working")
    }
}