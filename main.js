const { app, BrowserWindow } = require("electron");

function createWindow() {
  console.log("ready");
  app.whenReady().then(() => {
    const mainWin = new BrowserWindow({
      width: 800,
      height: 400,
    });

    mainWin.loadFile("index.html");

    mainWin.webContents.on("did-finish-load", () => {
      console.log("did-finish-load");
    });

    mainWin.webContents.on("dom-ready", () => {
      console.log("dom-ready");
    });

    mainWin.on("close", () => {
      console.log("close");
    });
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  console.log("all windows is closed");
  app.quit();
});

app.on("before-quit", () => {
  console.log("before-quit");
});

app.on("will-quit", () => {
  console.log("will-quit");
});

app.on("quit", () => {
  console.log("quit");
});
