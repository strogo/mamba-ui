import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PaginationShowcaseComponent } from './pagination-showcase.component';
import { Pagination1Component } from './pagination1/pagination1.component';

const routes: Routes = [
	{
		path: '',
		component: PaginationShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [PaginationShowcaseComponent, Pagination1Component],
})
export class PaginationModule {}
