import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModeloVestuarioComponent } from "./modelo-vestuario/modelo-vestuario.component";
import { MaterialComponent } from "./material/material.component";
import { FormaPagamentoComponent } from "./forma-pagamento/forma-pagamento.component";

const routes: Routes = [
    {path: 'modelo-vestuario', component: ModeloVestuarioComponent},
    {path: 'material', component: MaterialComponent},
    {path: 'forma-pagamento', component: FormaPagamentoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ModeloVestuarioComponent]