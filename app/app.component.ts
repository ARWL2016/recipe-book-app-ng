import { Component } from '@angular/core';
import { LocalStorage } from "./services/localstorage.service";
 
@Component({
    selector: 'rb-app',
    moduleId: module.id,
    templateUrl: 'app.component.html', 
    providers: [LocalStorage]

})
export class AppComponent { 
  brand: string = 'RECIPE BOOK'; 
}
