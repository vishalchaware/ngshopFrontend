import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { CategoriesService, ProductsService } from '@myngshop/products';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import { OrdersService } from '@myngshop/orders';


import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { UsersModule, JwtInterceptor } from '@myngshop/users';


const UX_MODULE = [
	CardModule,
	InputTextModule,
	ToolbarModule,
	ButtonModule,
	TableModule,
	ToastModule,
	ConfirmDialogModule,
	ColorPickerModule,
	InputNumberModule,
	DropdownModule,
	InputTextareaModule,
	InputSwitchModule,
	EditorModule,
	TagModule,
	InputMaskModule,
	FieldsetModule
];


@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ShellComponent,
		SidebarComponent,
		CategoriesListComponent,
		CategoriesFormComponent,
		ProductsListComponent,
		ProductsFormComponent,
		UsersListComponent,
		UsersFormComponent, 
		OrdersListComponent, 
		OrdersDetailComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		UsersModule,
		...UX_MODULE
	],
	providers: [
		CategoriesService,
		ProductsService,
		OrdersService,
		MessageService,
		ConfirmationService,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
