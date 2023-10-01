import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', loadChildren: () => import('./Component/Post/PostModule')
          .then(m => m.PostModule)

      },
      // {
      //   path: 'ecommerce', loadChildren: () => import('./ecommerce_app/EcommerceModule')
      //     .then(m => m.EcommerceModule)
      // },
      // {
      //   path: 'testOne', loadChildren: () => import('./dataStructureAlgorithm/TestOneModule')
      //     .then(m => m.TestOneModule)
      // },
      // {
      //   path: 'testTwo', loadChildren: () => import('./dataStructureAlgorithm/TestTwoModule')
      //     .then(m => m.TestTwoModule)
      // },
      // {
      //   path: 'searchAlgo', loadChildren: () => import('./dataStructureAlgorithm/SearchAlgoModule')
      //     .then(m => m.SearchAlgoModule)
      // },
      // {
      //   path: 'sortAlgo', loadChildren: () => import('./dataStructureAlgorithm/SortAlgorithmModule')
      //     .then(m => m.SortAlgorithmModule)
      // },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
