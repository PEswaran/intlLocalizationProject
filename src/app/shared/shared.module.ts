import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


const sharedModules: any[] = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  imports: sharedModules,
  exports: sharedModules
})
export class SharedModule { }
