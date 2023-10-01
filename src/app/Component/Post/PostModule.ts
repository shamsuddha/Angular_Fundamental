import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
// import {NgSelectModule} from "@ng-select/ng-select";
// import {MatDialogModule} from "@angular/material/dialog";
import { NgModule } from "@angular/core";
import { PostComp } from "./PostComp";

@NgModule({
  declarations: [
    PostComp,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComp,
      }]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgSelectModule,
    // MatDialogModule

  ],
  providers: [

  ],
})
export class PostModule {

}
