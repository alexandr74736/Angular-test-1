import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SomeComponent } from './someComponent/someComponent.component';
import { FormComponent } from './form/form.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SomeComponent, FormComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }