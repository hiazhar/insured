import { Component } from '@angular/core';
import { AgentdataService } from 'src/app/services/agentdata.service';

@Component({
  selector: 'insu-agent-register',
  templateUrl: './agent-register.component.html',
  styleUrls: ['./agent-register.component.scss']
})
export class AgentRegisterComponent {
  itemList: string[]=[];
  textareaContent: string ='';
  constructor(private agentdata : AgentdataService){}

  Agents=this.agentdata.getAgents();

  additem(){

    this.itemList = this.textareaContent.split('\n').filter(item => item.trim() !== '');
    
    this.itemList.forEach((item)=>{
      this.agentdata.addAgent(item);
    });

    this.textareaContent='';
    
  }
  reset(){
    this.textareaContent='';
  }
}
