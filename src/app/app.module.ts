import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { SystemModule } from './pages/system/system.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { CommonAppModule } from './common/common.module';

import { MatTableModule } from '@angular/material/table';

import { AboutComponent } from './pages/about/about.component';
import { IssueComponent } from './pages/issue/issue.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,

    // app core, common, dependancy
    CoreModule.forRoot(),
    CommonAppModule.forRoot(),
    LayoutModule,
    SystemModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
