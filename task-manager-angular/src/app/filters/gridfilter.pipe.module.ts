import { NgModule } from '@angular/core';
import {GridfilterPipe} from './gridfilter.pipe';

@NgModule({
  imports: [],
  declarations: [GridfilterPipe],
  exports: [GridfilterPipe]
})
export class GridfilterPipeModule { 
 static forRoot() {
  return {
      ngModule: GridfilterPipeModule,
      providers: [GridfilterPipe],
  };
}
}
