import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChatsectionComponent } from './components/chatsection/chatsection.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SearchComponent } from './search/search.component';
//Dialog box
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from './components/create/create.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './chat/chat.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ChatsectionComponent,
    UserCrudComponent,
    AdmindashboardComponent,
    WelcomePageComponent,
    CreateComponent,
    UpdateUserComponent,
    UserdashboardComponent,
    SearchComponent,
    ChatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ScrollingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateComponent]

})
export class AppModule { }
