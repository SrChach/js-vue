import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//	Importar componentes
import { ZapatoComponent } from './zapato/zapato.component'
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { CursoComponent } from './curso/curso.component'
import { HomeComponent } from './home/home.component'
import { PeticionComponent } from './peticion/peticion.component'
import { ContactoComponent } from './contacto/contacto.component'
import { ListacontactosComponent } from './listacontactos/listacontactos.component'
import { ArchivosComponent } from './archivos/archivos.component'
import { BlancoComponent } from './blanco/blanco.component'

//	Array de configuracion de las rutas
const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'zapatos', component: ZapatoComponent},
	{ path: 'videojuegos', component: VideojuegoComponent},
	{ path: 'cursos', component: CursoComponent},
	{ path: 'cursos/:nombre/:followers', component: CursoComponent},
	{ path: 'peticion', component: PeticionComponent},
	{ path: 'contacto', component: ContactoComponent },
	{ path: 'lista_contactos', component: ListacontactosComponent },
	{ path: 'archivos', component: ArchivosComponent },
	{ path: 'blanco', component: BlancoComponent },
	{ path: '**', component: HomeComponent }
];

//	Exportar el modulo del router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const appRoutingProviders: any[] = []