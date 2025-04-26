import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'menu', component: MenuPageComponent },
  {
    path: 'topic/:id',
    loadComponent: () =>
      import('./pages/topic-page/topic-page.component').then(
        (m) => m.TopicPageComponent
      ),
  },
  {
    path: 'topic/:id/story',
    loadComponent: () =>
      import('./pages/story-page/story-page.component').then(
        (m) => m.StoryPageComponent
      ),
  },
  //   { path: 'contact', component: MenuPageComponent },
  //   Fallback
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];
