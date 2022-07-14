import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ListboxModule} from 'primeng/listbox';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    //TableModule,
    CalendarModule,
    TabViewModule,
    ListboxModule,
    AutoCompleteModule,
    ProgressSpinnerModule,
    DialogModule
  ]
})
export class AppPrimengModule { }
