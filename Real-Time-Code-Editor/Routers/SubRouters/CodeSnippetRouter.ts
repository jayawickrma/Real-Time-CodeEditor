import {Router} from "express";
import CodeSnippetController from "../../Controller/CodeSnippetController";

class CodeSnippetRouter{
    router:Router
    codeSnippetController :CodeSnippetController

    constructor() {
        this.router =Router()
        this.codeSnippetController =new CodeSnippetController()
        this.initialRouters()
    }
    initialRouters():void{
        this.router.post('/push',this.codeSnippetController.pushCode)
        this.router.get('/pull',this.codeSnippetController.PullCode)
        this.router.delete('/delete',this.codeSnippetController.deleteCode)
        this.router.put('/updateCode',this.codeSnippetController.updateCode)
    }

}
const codeSnippet:CodeSnippetRouter =new CodeSnippetRouter()
export default codeSnippet;