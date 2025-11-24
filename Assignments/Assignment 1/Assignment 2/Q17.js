function downloadFile(filename, callback) {
  console.log(`Downloading ${filename}...`);
  setTimeout(() => {
    
    console.log(`Download of ${filename} complete.`);
    callback();
  }, 2000); 
}


downloadFile("my-photo.jpg", () => {
  console.log("Download complete!");
});
