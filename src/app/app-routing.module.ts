import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, PageDesignerComponent, ImageTestingComponent, TodoComponent } from './pages';

const routes: Routes = [
  { path: "", component: PageDesignerComponent },
  { path: "home", component: HomePageComponent },
  { path: "image", component: ImageTestingComponent },
  { path: "todo", component:TodoComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
