import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MainmenuePage } from '../pages/mainmenue/mainmenue';
import { ChatPage } from '../pages/chat/chat';
import { TicketsPage } from '../pages/tickets/tickets';
import { NewTicketPage } from '../pages/new-ticket/new-ticket';
import { TasksPage } from '../pages/tasks/tasks';
import { NewTaskPage } from '../pages/new-task/new-task';
import { UploadPage } from '../pages/upload/upload';
import { ContactsPage } from '../pages/contacts/contacts';
import { TicketDetailPage } from '../pages/TicketDetail/ticketdetail';
import { ticket1Page } from '../pages/TicketDetail/ticketCode/ticket1';
import { ticket2Page } from '../pages/TicketDetail/ticketCode/ticket2';
import { ticket3Page } from '../pages/TicketDetail/ticketCode/ticket3';
import { ticket4Page } from '../pages/TicketDetail/ticketCode/ticket4';
import { ticket5Page } from '../pages/TicketDetail/ticketCode/ticket5';
import { TaskDetailPage } from '../pages/TaskDetail/taskdetail';
import { task1Page } from '../pages/TaskDetail/taskCode/task1';
import { task2Page } from '../pages/TaskDetail/taskCode/task2';
import { task3Page } from '../pages/TaskDetail/taskCode/task3';
import { task4Page } from '../pages/TaskDetail/taskCode/task4';
import { task5Page } from '../pages/TaskDetail/taskCode/task5';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MyApp,  
    HomePage,   
    LoginPage,
    MainmenuePage,    
    TicketsPage,NewTicketPage,
    TasksPage,NewTaskPage,
    UploadPage,
    ChatPage,
    ContactsPage,
    TicketDetailPage,
    ticket1Page,
    ticket2Page,
    ticket3Page,
    ticket4Page,
    ticket5Page,
    TaskDetailPage,
    task1Page,
    task2Page,
    task3Page,
    task4Page,
    task5Page,
    FavoritesPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,  
    HomePage,
    LoginPage,
    MainmenuePage,
    TicketsPage, NewTicketPage,
    TasksPage, NewTaskPage,
    UploadPage,
    ChatPage,
    ContactsPage,
    TicketDetailPage,
    ticket1Page,
    ticket2Page,
    ticket3Page,
    ticket4Page,
    ticket5Page,
    TaskDetailPage,
    task1Page,
    task2Page,
    task3Page,
    task4Page,
    task5Page,
    FavoritesPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    VideoPlayer
  ]
})
export class AppModule {}
