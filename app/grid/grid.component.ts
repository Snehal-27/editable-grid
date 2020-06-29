import {
  AfterViewInit,
  Component,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { STRING_FILTERS } from "igniteui-angular/main";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-grid",
  styleUrls: ["./grid.component.scss"],
  templateUrl: "./grid.component.html"
})
export class GridComponent implements OnInit, OnDestroy {

  @ViewChild("grid1", { read: IgxGridComponent })
  public grid1: IgxGridComponent;

  public localData: any[];
  private windowWidth: any;

  constructor(private zone: NgZone) { }

  public ngOnInit() {
    this.localData = [
      { Id: 1, FirstName: "John", LastName: "Smith" },
      { Id: 2, FirstName: "Mark", LastName: "Jackson" },
      { Id: 3, FirstName: "Jay", LastName: "Coleman" },
    ];
    this.windowWidth = window.innerWidth;
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  public edit(event) {
  }
}
