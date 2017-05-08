ArtifactoryApp.service('APIService', function() {
  
    var APIUrl = "http://localhost:3000/api/";

    var repositories = APIUrl + "repositories/";
    var storage = APIUrl + "storage/";
    var repositoriesProperties = APIUrl + "repositoriesProperties/";
    var storageSecondLevel = APIUrl + "storageSecondLevel/";
    var storageTheirdLevel = APIUrl + "storageTheirdLevel/";
    var storageFourthLevel = APIUrl + "storageFourthLevel/";  
    var storageArtifactLevel = APIUrl + "storageArtifactLevel/";
    
    return {
        APIUrl: APIUrl,
        repositories: repositories,
        storage: storage,
        repositoriesProperties: repositoriesProperties,
        storageSecondLevel: storageSecondLevel,
        storageTheirdLevel: storageTheirdLevel,
        storageFourthLevel: storageFourthLevel,
        storageArtifactLevel: storageArtifactLevel
    }; 
    
});