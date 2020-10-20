import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { MemoriesView } from './views/memories-view/memories-view.component';
import { ThingsILoveViewComponent } from './views/things-i-love-view/things-i-love-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'loveAboutYou', component: ThingsILoveViewComponent },
  { path: 'memories', component: MemoriesView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
