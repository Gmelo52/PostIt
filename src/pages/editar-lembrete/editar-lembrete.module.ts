import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarLembretePage } from './editar-lembrete';

@NgModule({
  declarations: [
    EditarLembretePage,
  ],
  imports: [
    IonicPageModule.forChild(EditarLembretePage),
  ],
})
export class EditarLembretePageModule {}
