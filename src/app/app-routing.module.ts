import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityComponent} from "./component/city/city.component";

const routes: Routes = [{path: "", component: CityComponent},


  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
