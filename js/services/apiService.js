ArtifactoryApp.service('APIService', function() {
  
    var APIUrl = "http://localhost:3000/api/";

    var storageinfo = APIUrl + "storageinfo/";
    var storage = APIUrl + "storage/";
    
    return {
        storageinfo: storageinfo,
        storage: storage
    }; 
    
});