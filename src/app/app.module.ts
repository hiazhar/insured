import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgentRegisterComponent } from './components/agent-register/agent-register.component';
import { AgentSelectComponent } from './components/agent-select/agent-select.component';
import { AgentHomeComponent } from './components/agent-home/agent-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentRegisterComponent,
    AgentSelectComponent,
    AgentHomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
