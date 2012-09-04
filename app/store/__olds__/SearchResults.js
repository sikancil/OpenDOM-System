Ext.define('SDS.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'SDS.model.Station',
    model: 'SDS.model.Station',

    autoLoad: true,
    
    // Overriding the model's default proxy
    proxy: {
        type: 'ajax',
        url: 'data/searchresults.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});