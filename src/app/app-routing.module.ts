import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: [
        HomeComponent,
        NotfoundComponent
    ]
})
export class AppRoutingModule { }
