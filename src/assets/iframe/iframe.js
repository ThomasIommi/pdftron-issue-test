window.addEventListener('load', async e => {
  const scrollViewElement = document.getElementById('scroll-view');
  const viewerElement = document.getElementById('viewer');
  const PDFTRON = window.Core;
  console.log(window);
  PDFTRON.setWorkerPath('../../lib/pdftron/core');
  const viewer = new PDFTRON.DocumentViewer();
  viewer.setViewerElement(viewerElement);
  viewer.setScrollViewElement(scrollViewElement);
  await viewer.loadDocument('../PDFTRON_about.pdf');
  viewer.setToolMode(viewer.getTool(PDFTRON.Tools.ToolNames.TEXT_SELECT));
})
