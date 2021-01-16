import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from '../directives/highlighter.directive';


@NgModule({
  declarations: [ComponentsComponent, UsersComponent, HeaderComponent,HighlighterDirective],
  imports: [
    CommonModule,
    ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
