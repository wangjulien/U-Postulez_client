import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirementComponent } from './virement/virement.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './service/auth.guard';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ListUsersComponent } from './list-users/list-users.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'virement', component: VirementComponent, canActivate: [AuthGuard] },
  { path: 'update-client/:id', component: UpdateclientComponent, canActivate: [AuthGuard] },
  { path: 'update-client', component: UpdateclientComponent, canActivate: [AuthGuard] },
  { path: 'gestion-client', component: ListArticlesComponent, canActivate: [AuthGuard] },
  { path: 'gestion-conseiller', component: ListUsersComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
