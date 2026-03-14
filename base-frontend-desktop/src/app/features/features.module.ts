import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { PerfilModule } from './perfil/perfil.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersModule,
    PerfilModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
