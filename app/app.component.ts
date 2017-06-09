import {Component} from "@angular/core";

// import frame = require("tns-core-modules/ui/frame");
import {RadSideDrawer} from "nativescript-telerik-ui/sidedrawer";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor() {
    }

    // public onOpenDrawerTap() {
    //     let sideDrawer: RadSideDrawer = <RadSideDrawer>( frame.topmost().getViewById("sideDrawer"));
    //     sideDrawer.showDrawer();
    // }
    //
    // public onCloseDrawerTap() {
    //     let sideDrawer: RadSideDrawer = <RadSideDrawer>( frame.topmost().getViewById("sideDrawer"));
    //     sideDrawer.closeDrawer();
    // }
}
