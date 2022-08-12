import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DicomViewerContainerComponent } from './dicom-viewer-container/dicom-viewer-container.component';
import { DicomViewerModule } from './dicom-viewer-container/dicom-viewer/dicom-viewer.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, DicomViewerModule],
  declarations: [
    AppComponent,
    DicomViewerContainerComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
