import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyChildRouteComponent} from '@shared/components/empty-child-route/empty-child-route.component';

import {SharedModule} from '@shared/shared.module';
import {TemplatesComponent} from './templates.component';

const routes: Routes = [
	{
		path: '',
		component: TemplatesComponent,
		children: [
			{
				path: '',
				component: EmptyChildRouteComponent,
			},
			{
				path: 'portfolio',
				loadChildren: () =>
					import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
				data: {title: 'Portfolio', breadcrumb: 'Portfolio'},
			},
			{
				path: 'business',
				loadChildren: () =>
					import('./business/business.module').then(m => m.BusinessModule),
				data: {title: 'Business', breadcrumb: 'Business'},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [TemplatesComponent],
	providers: [],
})
export class TemplatesModule {}
