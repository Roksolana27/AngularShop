import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantService } from './services/constant.service';
import { GeneratorService } from './services/generator.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    ConstantService,
    GeneratorService,
    AuthGuard,
    AuthService
  ]
})
export class CoreModule {
  constructor() {

  }
}
