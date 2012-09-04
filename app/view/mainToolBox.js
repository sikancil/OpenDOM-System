Ext.define('SDS.view.mainToolBox', {
	extend: 'Ext.Panel',
	alias: 'widget.maintoolbox',
	border: false,
	items: [{
		layout: 'fit',
		border: false,
		split: true,
		xtype: 'panel',
		tbar: [{
			xtype: 'buttongroup',
			dock: 'top',
			title: 'Pointer',
			border: false,
			defaults: {
				scale: 'large',
				width: 64,
				height: 66
			},
			items: [{
				text: 'Pointer',
				iconCls: 'pointer48',
				rowspan: 3,
				iconAlign: 'top',
				enableToggle: false,
				toggleGroup: 'marker, area',
				tooltip: {
					text: 'Pointer cursor'
				}
			}]
		}, {
			xtype: 'buttongroup',
			dock: 'top',
			title: 'Marker',
			border: false,
			columns: 2,
			defaults: {
				scale: 'small'
			},
			items: [{
				//xtype:'splitbutton',
				iconCls: 'marker16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Drop new Point'
				}
				//menu: [{text: 'Menu Item 1'}]
			}, {
				iconCls: 'line16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Create new Line'
				}
			}, {
				iconCls: 'polygon16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Create new Polygon'
				}
			}, {
				iconCls: 'circle16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Create new Circle'
				}
			}, {
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Create new Rectangle'
				}
			}, {
				iconCls: 'label16',
				enableToggle: true,
				toggleGroup: 'marker',
				tooltip: {
					text: 'Create new Label'
				}
			}]
		}, {
			xtype: 'buttongroup',
			title: 'Area',
			border: false,
			columns: 2,
			defaults: {
				scale: 'small'
			},
			items: [{
				iconCls: 'polyline16',
				enableToggle: true,
				toggleGroup: 'area',
				tooltip: {
					text: 'Create new Polyline'
				}
			}, {
				iconCls: 'polygon16',
				enableToggle: true,
				toggleGroup: 'area',
				tooltip: {
					text: 'Create new Polygon'
				}
			}, {
				iconCls: 'circle16',
				enableToggle: true,
				toggleGroup: 'area',
				tooltip: {
					text: 'Create new Circle'
				}
			}, {
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'area',
				tooltip: {
					text: 'Create new Rectangle'
				}
			}, {
				xtype: 'tbspacer',
				colspan: 2,
				width: 42,
				height: 22,
				html: '<div style="width:100%; padding: 6px 0 0 0; text-align:center; font-size:.6em; color:blue;">Coverage</div>'
			}]
		}]
	}, {
		border: false,
		split: true,
		xtype: 'panel',
		tbar: [{
			xtype: 'buttongroup',
			dock: 'top',
			title: 'Map Type',
			columns: 2,
			height: 87,
			defaults: {
				scale: 'medium'
			},
			items: [{
				//text: 'Street &nbsp;',
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'maptype',
				tooltip: {
					text: 'Change map type as Street View'
				}
			},{
				//text: 'Satellite &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'maptype',
				tooltip: {
					text: 'Change map type as Satellite View'
				}
			},{
				//text: 'Hybrid &nbsp;',
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'maptype',
				tooltip: {
					text: 'Change map type as Hybrid View'
				}
			},{
				//text: 'Relief &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'maptype',
				tooltip: {
					text: 'Change map type as Relief View'
				}
			}]
		}, {
			xtype: 'buttongroup',
			dock: 'top',
			title: 'D O M',
			border: false,
			defaults: {
				width: 52,
				height: 66
			},
			width: 50,
			height: 87,
			html: '<table width="100%" height="100%" bgcolor="#fff"><tr valign="middle"><td align="center" style="font-size:.55em; color:blue;">Logo<br/>&<br/>Donations</td></tr></table>'
		}, {
			xtype: 'buttongroup',
			title: 'Tools',
			border: false,
			columns: 2,
			defaults: {
				scale: 'small'
			},
			items: [{
				iconCls: 'polyline16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Search location on map..'
				}
			}, {
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Zoom to home location'
				}
			}, {
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Direction to location'
				}
			}, {
				iconCls: 'polygon16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Measure distance'
				}
			}, {
				iconCls: 'circle16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Get street address on drop point'
				}
			}, {
				iconCls: 'rectangle16',
				enableToggle: true,
				toggleGroup: 'tools',
				tooltip: {
					text: 'Get coordinates on drop point'
				}
			}]
		}]
	}, {
		border: false,
		split: true,
		xtype: 'panel',
		tbar: [{
			xtype: 'buttongroup',
			dock: 'top',
			title: 'Extend Functions',
			columns: 2,
			width: 174,
			defaults: {
				scale: 'small'
			},
			items: [{
				text: 'Preview',
				iconCls: 'rectangle16',
				tooltip: {
					text: 'Print'
				}
			},{
				text: 'Export to PDF ',
				iconCls: 'rectangle16',
				tooltip: {
					text: 'Export to PDF'
				}
			},{
				text: 'EMail &nbsp;&nbsp;&nbsp;',
				iconCls: 'rectangle16',
				tooltip: {
					text: 'EMail'
				}
			},{
				text: 'Export to XLS ',
				iconCls: 'rectangle16',
				tooltip: {
					text: 'Export to Excel'
				}
			}]
		}]
	}, {
		border: false,
		split: true,
		xtype: 'panel',
		title: 'News & Info',
		html: ''
	}]
});