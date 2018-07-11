import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModeloVestuarioComponent } from "./modelo-vestuario/modelo-vestuario.component";

const routes: Routes = [
    {path: 'modelo-vestuario', component: ModeloVestuarioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ModeloVestuarioComponent]