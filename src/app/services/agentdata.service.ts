import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentdataService {
  private AgentArray: string[] = ['Gina Williams',' Jake Williams','Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith']
  constructor() { }

  getAgents(): string[] {
    return this.AgentArray;
  }
  addAgent(item: string): void {
    this.AgentArray.push(item);
  }
}
