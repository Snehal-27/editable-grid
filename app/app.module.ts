import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputModule,
	IgxLabelModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular/main";
import { GridComponent } from "./grid/grid.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule.forRoot(),
		IgxIconModule,
		IgxInputModule,
		IgxLabelModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		HttpClientModule
  ],
  providers: []
})
export class AppModule {}
