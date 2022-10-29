import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Core } from '@pdftron/webviewer';


declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Core: typeof Core;
  }
}

export const PDFTRON = window.Core;
PDFTRON.setWorkerPath('/lib/pdftron/core');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('scrollView') scrollViewRef!: ElementRef<HTMLElement>;
  @ViewChild('viewer') viewerRef!: ElementRef<HTMLElement>;

  private viewer!: Core.DocumentViewer;
  private areaSelectTool!: Core.Tools.RectangleCreateTool;
  private textSelectTool!: Core.Tools.TextSelectTool;

  vw: number = window.innerWidth;
  vh: number = window.innerHeight;

  async ngAfterViewInit() {
    this.viewer = new PDFTRON.DocumentViewer();
    this.viewer.setViewerElement(this.viewerRef.nativeElement);
    this.viewer.setScrollViewElement(this.scrollViewRef.nativeElement);
    await this.viewer.loadDocument('/assets/PDFTRON_about.pdf');
    this.viewer.setOptions({enableAnnotations: true});
    this.textSelectTool = this.viewer.getTool(PDFTRON.Tools.ToolNames.TEXT_SELECT) as Core.Tools.TextSelectTool;
    this.areaSelectTool = this.viewer.getTool(PDFTRON.Tools.ToolNames.RECTANGLE) as Core.Tools.RectangleCreateTool;
    this.areaSelectTool.setStyles({
      'StrokeColor': new PDFTRON.Annotations.Color(231, 124, 39),
      'StrokeThickness': 1,
      'FillColor': new PDFTRON.Annotations.Color(253, 195, 0),
      'Opacity': 0.6
    });
    this.viewer.setToolMode(this.textSelectTool);
  }

}
