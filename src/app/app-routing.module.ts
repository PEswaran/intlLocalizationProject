import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatePaneComponent } from './translate-pane/translate-pane.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LocalizePaneComponent } from './localize-pane/localize-pane.component';
import { ContentPaneComponent } from './content-pane/content-pane.component';

const appRoutes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'content', component: ContentPaneComponent },
  { path: 'localize', component: LocalizePaneComponent },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
