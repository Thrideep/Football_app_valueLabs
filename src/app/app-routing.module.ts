import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'teams', component: TeamViewComponent },
  { path: 'team/:name', component: TeamDetailComponent },
  { path: '**', redirectTo: '/upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
