import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu-page/menu-page.component').then(
        (m) => m.MenuPageComponent
      ),
    // children: [
    //   {
    //     path: 'further-infos',
    //     loadComponent: () =>
    //       import(
    //         './pages/external-links-page/external-links-page.component'
    //       ).then((m) => m.ExternalLinksPageComponent),
    //   },
    // ],
  },
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
  {
    path: 'further-infos',
    loadComponent: () =>
      import('./pages/external-links-page/external-links-page.component').then(
        (m) => m.ExternalLinksPageComponent
      ),
  },
  {
    path: 'liability',
    loadComponent: () =>
      import('./pages/liability-page/liability-page.component').then(
        (m) => m.LiabilityPageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },

  //   { path: 'contact', component: MenuPageComponent },
  //   Fallback
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];
