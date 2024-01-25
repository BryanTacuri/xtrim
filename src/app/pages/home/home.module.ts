import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { SeccionSaludoComponent } from './components/seccion-saludo/seccion-saludo.component';
import { SeccionCuentaComponent } from './components/seccion-cuenta/seccion-cuenta.component';
import { SeccionDetalleComponent } from './components/seccion-detalle/seccion-detalle.component';
import { SeccionAsideComponent } from './components/seccion-aside/seccion-aside.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  declarations: [
    HomeComponent,
    CapitalizePipe,
    SeccionSaludoComponent,
    SeccionCuentaComponent,
    SeccionDetalleComponent,
    SeccionAsideComponent,
  ],
  providers: [UserService],
})
export class HomeModule {}
