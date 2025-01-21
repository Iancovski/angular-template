import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class WindowService {
    private screenSizes = {
        "extra-small-screen": 480,
        "small-screen": 768,
        "medium-screen": 1024,
        "large-screen": 1280,
        "extra-large-screen": 1366,
    };

    screenIsLargerThan(breakpoint: Breakpoint) {
        return window.innerWidth >= this.screenSizes[breakpoint];
    }

    screenIsSmallerThan(breakpoint: Breakpoint) {
        return window.innerWidth < this.screenSizes[breakpoint];
    }
}

type Breakpoint = "extra-small-screen" | "small-screen" | "medium-screen" | "large-screen" | "extra-large-screen";
