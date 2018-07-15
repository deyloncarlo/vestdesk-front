import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModeloVestuarioComponent } from "./modelo-vestuario/modelo-vestuario.component";
<<<<<<< HEAD
import { FormaPagamentoComponent } from "./forma-pagamento/forma-pagamento.component";

const routes: Routes = [
    {path: 'modelo-vestuario', component: ModeloVestuarioComponent},
    {path: 'forma-pagamento', component: FormaPagamentoComponent}
=======
import { MaterialComponent } from "./material/material.component";

const routes: Routes = [
    {path: 'modelo-vestuario', component: ModeloVestuarioComponent},
    {path: 'material', component: MaterialComponent}
>>>>>>> 3453ee80d01d86a67076db28f9678ba01b7f1d75
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ModeloVestuarioComponent, FormaPagamentoComponent]