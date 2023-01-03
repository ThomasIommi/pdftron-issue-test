window.addEventListener('load', async e => {
  const scrollViewElement = document.getElementById('scroll-view');
  const viewerElement = document.getElementById('viewer');
  const viewportValues = document.getElementById('viewport-values');
  viewportValues.innerText = `IFRAME VIEWPORT width: ${window.innerWidth}px, height: ${window.innerHeight}px`;
  const PDFTRON = window.Core;
  PDFTRON.setWorkerPath('../../lib/pdftron/core');
  const viewer = new PDFTRON.DocumentViewer();
  viewer.setOptions({enableAnnotations: true});
  viewer.setViewerElement(viewerElement);
  viewer.setScrollViewElement(scrollViewElement);
  await viewer.loadDocument('../PDFTRON_about.pdf');
  const textSelectTool = viewer.getTool(PDFTRON.Tools.ToolNames.TEXT_SELECT);
  const areaSelectTool = viewer.getTool(PDFTRON.Tools.ToolNames.RECTANGLE);
  areaSelectTool.setStyles({
    'StrokeColor': new PDFTRON.Annotations.Color(231, 124, 39),
    'StrokeThickness': 1,
    'FillColor': new PDFTRON.Annotations.Color(253, 195, 0),
    'Opacity': 0.6
  });
  viewer.setToolMode(areaSelectTool);
})
