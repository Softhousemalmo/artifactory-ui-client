ArtifactoryApp.service('APIService', function() {
  
    var storageinfo = "http://localhost:3000/api/storageinfo";
    
    return {
        storageinfo: storageinfo
    }; 
    
});