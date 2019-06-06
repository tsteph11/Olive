import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    resetServer = false;
    serverCreated = false;
    serverCreationStatus = 'No server was created!';
    serverName = '';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        
    }

    ngOnInit(){

    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was created! The new server name is ' + this.serverName;
    }

    onUpdateServerName(event: any){
        this.serverName = event.target.value;
    }

    onResetServer () {
        this.serverName = '';
    }

}