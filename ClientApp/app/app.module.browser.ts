import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppModuleShared } from "./app.module.shared";
import { VpvRootComponent } from "./components/vpv-root/vpv-root.component";

@NgModule({
    bootstrap: [VpvRootComponent],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: "BASE_URL", useFactory: getBaseUrl },
        
    ]
})
export class AppModule { }

export function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}