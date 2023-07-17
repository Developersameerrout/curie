import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop4 } from './desktop4.component'

const routes = [
  {
    path: '',
    component: Desktop4,
  },
]

@NgModule({
  declarations: [Desktop4],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop4],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop4Module {}
