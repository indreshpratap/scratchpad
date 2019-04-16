import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, PageDesignerComponent } from './pages';

const routes: Routes = [
  { path: "", component: PageDesignerComponent },
  { path: "home", component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
