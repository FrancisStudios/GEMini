/*
* Handlers are small logic controllers
* that can be activated and deactivated
* these should serve only one purpose
*/

class DOMClick {
    activated; //Boolean
    peek; // Click Event

    constructor(_default = true){ 
        this.activated = _default;
        document.addEventListener('click', (_clickEvent)=>{
            this.peek = _clickEvent;
        });
    }

    get isActivated(){ return this.activated; }
    set setActivate(_status){ this.activated = _status; }
    
    click(callback){
        if(this.activated){
            callback(this.peek);
        }
    }
}

module.exports = {
    DOMClick
}