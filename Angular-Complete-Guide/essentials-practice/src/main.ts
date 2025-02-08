import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//Using Modules
platformBrowserDynamic().bootstrapModule(AppModule);


//Using Components as standalone only without modules
// bootstrapApplication(AppComponent).catch((err) => console.error(err));