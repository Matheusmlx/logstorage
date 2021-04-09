import { NgModule } from "@angular/core"
import {Routes, RouterModule} from '@angular/router'
import { LogviewComponent } from "./views/logview/logview.component"

const routes: Routes = [
    {
        path: '',
        component: LogviewComponent
    }
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }