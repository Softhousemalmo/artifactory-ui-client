ArtifactoryApp.service('APIService', function() {
  
    var APIUrl = "http://localhost:3000/api/";
  // this url must change to the server after deploy 

    var repositories = APIUrl + "repositories/";
    var storage = APIUrl + "storage/";
    var search = APIUrl + "search/";
    
    return {
        APIUrl: APIUrl,
        repositories: repositories,
        storage: storage,
        search: search,
    }; 
    
});
