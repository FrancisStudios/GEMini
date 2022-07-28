/*
* Handlers are small logic controllers
* that can be activated and deactivated
* these should serve only one purpose
*/

export class Template {
    activated; //Boolean

    constructor(_default = true){ this.activated = _default; }

    get isActivated(){ return this.activated; }
    set setActivate(_status){ this.activated = _status; }
    
    action(_action){
        if(this.activated){
            
        }
    }
}