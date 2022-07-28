/*
*   This is the main entry point for managing
*   system components of the application this 
*   file serves as a facade for activating 
*   and instantiating other components
*/

//const { TabSwitcher } = require('./src/handlers/tab-switcher.handler');

const _previousWorkspace = {
    __workspace : "debugger",
    get: () => { return this.__workspace },
    set: (workspaceID) => { this.__workspace = workspaceID.split('-')[0]; }
}

/*
* Handling the switch of workspaces
*/
$(document).on('DOMContentLoaded', ()=>{

    $('#editor-switch').on('click', (_event)=>{
        workspace = _previousWorkspace.get
        console.log(workspace)
    });

})