Ext.define('SDS.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'border',
	
	requires: [
		'SDS.view.mainHeader',
		'SDS.view.mainToolBox',
		'SDS.view.mainProperties',
		'SDS.view.mainWorkspace'
	],
	
	initComponent: function() {
		this.items = [{
			itemId: 'pnlHeader',
			xtype: 'panel',
			region: 'north',
			border: false,
			split: false,
			collapsible: false,
			bodyStyle: 'background:#dfe8f6;',
			items: [{
				xtype: 'mainheader'
			}]
		}, {
			itemId: 'pnlToolBox',
			xtype: 'panel',
			region: 'west',
			title: 'Toolbox',
			width: 186,
			border: true,
			split: false,
			padding: '0 6 0 0',
			collapsible: true,
			collapsed: false,
			items: [{
				xtype: 'maintoolbox'
			}]
		}, {
			itemId: 'pnlProperties',
			name: 'pnlProperties',
			xtype: 'panel',
			region: 'east',
			title: 'Properties',
			width: 200,
			border: true,
			split: true,
			collapsible: true,
			collapsed: false,
			items: [{
				xtype: 'mainproperties'
			}]
		}, {
			itemId: 'pnlDataCenter',
			xtype: 'panel',
			region: 'south',
			title: 'Data Center',
			border: true,
			split: true,
			collapsible: true,
			collapsed: false,
			minHeight: 100
		}, {
			itemId: 'pnlWorkspace',
			xtype: 'mainworkspace',
			layout: 'fit',
			region: 'center',
			title: 'Workspace',
			border: true
		}];
		
		this.callParent();
	}
});