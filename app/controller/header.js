Ext.define('SDS.controller.header', {
    extend: 'Ext.app.Controller',
    
    /*
    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
    }
    */
    
    init: function() {
        this.control({
            'viewport > header': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});