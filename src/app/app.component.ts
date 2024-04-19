import {Component} from "@angular/core";
import {translate} from "@jsverse/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    translate("This first key will be extracted");
  }

  getString(): string
  {
    return "5";
  }

  extractionProblem(): void
  {
    translate("This second key will be extracted");
    const foo = <string>this.getString();
    translate("This third key will NOT be extracted");
  }
}
