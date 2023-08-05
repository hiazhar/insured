import { Component, HostListener } from '@angular/core';
import { AgentdataService } from 'src/app/services/agentdata.service';

@Component({
  selector: 'insu-agent-select',
  templateUrl: './agent-select.component.html',
  styleUrls: ['./agent-select.component.scss']
})
export class AgentSelectComponent {


  constructor(private agentsData: AgentdataService) { }


  agents = this.agentsData.getAgents();
  //fetching records
  selections: string[] = [];

  searchitem: string = '';
  showdropdown: boolean = true;
  matchingValues: String[] = [];

  //keyboard purpose
  selectedIndex=-1;
  lis = document.getElementsByTagName('li');

  onInputChange(event: Event): void {

    if (this.searchitem.startsWith('@')) {

      this.searchitem = this.searchitem;
      this.matchingValues = this.agents.filter((val) =>
        val.toLowerCase().includes(this.searchitem.substring(1).toLowerCase())
      );

      this.showdropdown = this.matchingValues.length > 0;
      this.selectedIndex=-1;
      

    };

  }

  selectValue(value: String): void {
    this.searchitem = '';
    this.showdropdown = false;
    if (!this.selections.includes(`${value}`)) {
      this.selections.push(`${value}`);
    }
  }



  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        this.navigate(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.navigate(1);
        break;
      case 'Enter':
        event.preventDefault();
        this.selectItem(this.selectedIndex);
        break;
    }
  }
  navigate(direction: number) {
    if (this.selectedIndex >= 0) {
      this.lis[this.selectedIndex].classList.remove('selected');
    }

  this.selectedIndex = (this.selectedIndex + direction + this.lis.length) % this.lis.length;
  this.lis[this.selectedIndex].classList.add('selected');
  }
  selectItem(index:number){
    this.selectValue(`${this.lis[this.selectedIndex].textContent}`)
  }










}
