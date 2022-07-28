/*
* Handlers are small logic controllers
* that can be activated and deactivated
* these should serve only one purpose
*/

export class TabSwitcher {
    activated; //Boolean

    constructor(_default = true){ 
        this.activated = _default; 
    }

    get isActivated(){ return this.activated; }
    set setActivate(_status){ this.activated = _status; }
    
    switchTab(_tabname){
        if(this.activated){
            
        }
    }
}