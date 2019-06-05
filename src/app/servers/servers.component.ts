import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
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
        this.serverCreationStatus = 'Server was created!';
    }

    onUpdateServerName(event: any){
        this.serverName = event.target.value;
    }
}