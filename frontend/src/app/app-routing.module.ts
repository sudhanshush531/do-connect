import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

import { ChatsectionComponent } from './components/chatsection/chatsection.component';
import { CreateComponent } from './components/create/create.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SearchComponent } from './search/search.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatsectionComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'crud', component: UserCrudComponent },
  { path: 'adduser', component: CreateComponent },
  { path: 'updateuser', component: UpdateUserComponent },
  { path: 'search/:id', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
