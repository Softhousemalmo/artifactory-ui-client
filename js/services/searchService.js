ArtifactoryApp.service('SearchService', function() {
    var myQuery = null;

    var addSearch = function(query) {
        myQuery = query;
    }
    var getSearch = function(){
        return myQuery;
    }
    return {
        addSearch: addSearch,
        getSearch: getSearch
    };
});