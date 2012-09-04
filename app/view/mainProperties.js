/*
Ext.define('SDS.view.propInfo', {
	extend: 'Ext.Component',
	alias: 'widget.propinfo',
	height: 200,
	bodyStyle: 'background: #dfe8f6',
	items: [{
		xtype: 'panel',
		html: '1231231'
	}]
});
*/

Ext.define('SDS.view.mainProperties', {
	extend: 'Ext.grid.property.Grid',
	alias: 'widget.mainproperties',
	border: false,
	propertyNames: {
		tested: 'QA',
		borderWidth: 'Border Width'
	},
	source: {
		"(name)": "Properties Grid",
		"grouping": false,
		"autoFitColumns": true,
		"productionQuality": false,
		"created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
		"tested": false,
		"version": 0.01,
		"borderWidth": 1
	},
	tbar: [{
		xtype:'component',
		html: '<div class="rectangle16" style="width:16px; height:16px; background: no-repeat top left; margin:0 0 0 2px; padding:0 0 0 18px;">&nbsp;</div>'
	}, {
		xtype: 'textfield',
        name: 'edFindVar',
        emptyText: 'Find Variable'
	}, {
		iconCls: 'polygon16',
		tooltip: {
			text: 'Go, find!'
		}
	}]
});

/*
Ext.define('SDS.view.mainProperties', {
	extend: 'Ext.Panel',
	alias: 'widget.mainproperties',
	layout: 'border',
	border: false,
	items: [{
		xtype: 'propinfo',
		region: 'south'
		
	}, {
		xtype: 'proppanel',
		region: 'center'
	}]
});
*/