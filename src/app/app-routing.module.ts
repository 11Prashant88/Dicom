import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DicomViewerContainerComponent } from './dicom-viewer-container/dicom-viewer-container.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dicomviewer', component: DicomViewerContainerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
