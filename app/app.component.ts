import { Component } from '@angular/core';
 
@Component({
    selector: 'rb-app',
    template: `
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid"> 
          <a class="navbar-brand">{{pageTitle}}</a>
            <ul class="nav navbar-nav"> 
              <li><a [routerLink]="['/recipes']">Recipe List</a></li>
              <li><a [routerLink]="['/form']">Add Recipe</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `
    
})
export class AppComponent { 
  pageTitle: string = 'Recipe Book'; 
}
