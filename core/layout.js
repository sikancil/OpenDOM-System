Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', 'core/ux');

Ext.require(['Ext.*']);


Ext.onReady(function(){
    /*** Init App as Loader Mask ***/
	var firebugWarning = function () {
		var cp = Ext.create('Ext.state.CookieProvider');
		
		if (window.console && window.console.firebug && !cp.get('hideFBWarning')){
			var tpl = Ext.create('Ext.Template',
				'<div id="fb" style="border: 1px solid #FF0000; background-color:#FFAAAA; display:none; padding:15px; color:#000000;">'+
				'<b>Warning: </b> Firebug is known to cause performance issues with our systems. <a href="#" id="hideWarning">[ Hide ]</a>'+
				'</div>'
			);
			var newEl = tpl.insertFirst('page');
			
			Ext.fly('hideWarning').on('click', function() {
				Ext.fly(newEl).slideOut('t',{remove:true});
				cp.set('hideFBWarning', true);
			});
			Ext.fly(newEl).slideIn();
		}
	};
	
	var hideMask = function () {
		Ext.get('loading').remove();
		Ext.fly('loading-mask').animate({
			opacity:0,
			duration: 2500,
			remove:true,
			callback: firebugWarning
		});
	};

	Ext.defer(hideMask, 250);
	
	
	Ext.tip.QuickTipManager.init();
	
	
	var detailEl;
	var dt = new Date();
	
	var handleAction = function(act, ev, eOpts){
        Ext.getCmp('content-panel').layout.setActiveItem(act+'-panel');
		if (!detailEl) {
			var bd = Ext.getCmp('info-panel').body;
			bd.update('').setStyle('background','#fff');
			/*** create default empty div ***/
			detailEl = bd.createChild();
		}
		detailEl.hide().update(Ext.getDom(act+'-info').innerHTML).slideIn('l', {stopAnimation:true,duration: 200});
    };
	
	var elMenu = document.getElementById('startmenu_bar');
	var tb = Ext.create('Ext.Panel', {
		id: 'menu',
		border: false,
		renderTo: elMenu,
		layout: {
			overflowHandler: 'Menu'
		},
		items: [{
			layout: 'fit',
			border: false,
			xtype: 'panel',
			id: 'tpnl_ToolDraw',
			tbar: [{
				xtype: 'buttongroup',
				id: 'tgrp_DrawPointer',
				dock: 'top',
				title: 'Pointer',
				border: false,
				defaults: {
					scale: 'large',
					width: 64,
					height: 66
				},
				items: [{
					id: 'tbtn_GrabHand',
					text: '<div style="width:100%; margin: -3px 0 0 -2px; text-align:center; line-height:12px;"><b>Hand</b><br>(Grab Map)</div>',
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
				id: 'tgrp_DrawMarker',
				dock: 'top',
				title: 'Marker',
				border: false,
				columns: 2,
				defaults: {
					scale: 'small'
				},
				items: [{
					//xtype:'splitbutton',
					id: 'tbtn_DrawMarker',
					iconCls: 'marker16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Drop new Point'
					}
					//menu: [{text: 'Menu Item 1'}]
				}, {
					id: 'tbtn_DrawLine',
					iconCls: 'line16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Create new Line'
					}
				}, {
					id: 'tbtn_DrawPolygon',
					iconCls: 'polygon16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Create new Polygon'
					}
				}, {
					id: 'tbtn_DrawCircle',
					iconCls: 'circle16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Create new Circle'
					}
				}, {
					id: 'tbtn_DrawRectangle',
					iconCls: 'rectangle16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Create new Rectangle'
					}
				}, {
					id: 'tbtn_DrawPolyline',
					iconCls: 'polyline16',
					enableToggle: true,
					toggleGroup: 'marker',
					tooltip: {
						text: 'Create new Polyline'
					}
				}]
			}, {
				xtype: 'buttongroup',
				id: 'tgrp_DrawArea',
				title: 'Area',
				border: false,
				columns: 2,
				defaults: {
					scale: 'small'
				},
				items: [{
					id: 'tbtn_AreaLabel',
					iconCls: 'area-label16',
					enableToggle: true,
					toggleGroup: 'area',
					tooltip: {
						text: 'Create new Label'
					}
				}, {
					id: 'tbtn_AreaPolygon',
					iconCls: 'area-polygon16',
					enableToggle: true,
					toggleGroup: 'area',
					tooltip: {
						text: 'Create new Polygon'
					}
				}, {
					id: 'tbtn_AreaCircle',
					iconCls: 'area-circle16',
					enableToggle: true,
					toggleGroup: 'area',
					tooltip: {
						text: 'Create new Circle'
					}
				}, {
					id: 'tbtn_AreaRectangle',
					iconCls: 'area-rectangle16',
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
					html: '<div style="width:100%; padding: 6px 0 0 0; text-align:center; font-size:10px; color:gray;">Coverage</div>'
				}]
			}]
		}, {
			border: false,
			split: true,
			xtype: 'panel',
			id: 'tpnl_ToolMaps',
			tbar: [{
				xtype: 'buttongroup',
				id: 'tgrp_MapsType',
				dock: 'top',
				title: 'Map Type',
				columns: 2,
				height: 87,
				defaults: {
					scale: 'medium'
				},
				items: [{
					id: 'tbtn_TypeStreet',
					iconCls: 'street24',
					enableToggle: true,
					toggleGroup: 'maptype',
					tooltip: {
						text: 'Change map type as Street View'
					}
				},{
					id: 'tbtn_TypeSatellite',
					iconCls: 'satellite24',
					enableToggle: true,
					toggleGroup: 'maptype',
					tooltip: {
						text: 'Change map type as Satellite View'
					}
				},{
					id: 'tbtn_TypeHybrid',
					iconCls: 'hybrid24',
					enableToggle: true,
					toggleGroup: 'maptype',
					tooltip: {
						text: 'Change map type as Hybrid View'
					}
				},{
					id: 'tbtn_TypeRelief',
					iconCls: 'relief24',
					enableToggle: true,
					toggleGroup: 'maptype',
					tooltip: {
						text: 'Change map type as Relief View'
					}
				}]
			}, {
				xtype: 'buttongroup',
				id: 'tgrp_MapsInfo',
				dock: 'top',
				title: 'About Us',
				border: false,
				defaults: {
					width: 52,
					height: 66
				},
				width: 50,
				height: 87,
				html: '<table width="100%" height="100%" style="margin:0 0 0 -3px;"><tr valign="middle"><td align="center" style="text-align:center; vertical-align:middle; font-size:9px; color:blue; padding:0px;"><img src="res/img/system/logo48.png" border="0" width="50" height="50"><br/>* D O M *</td></tr></table>'
			}, {
				xtype: 'buttongroup',
				id: 'tgrp_MapsTool',
				title: 'Tools',
				border: false,
				columns: 2,
				defaults: {
					scale: 'small'
				},
				items: [{
					id: 'tbtn_ToolSearch',
					iconCls: 'search16',
					tooltip: {
						text: 'Search location on map..'
					}
				}, {
					id: 'tbtn_ToolHome',
					iconCls: 'zoom-home16',
					tooltip: {
						text: 'Zoom to home location'
					}
				}, {
					id: 'tbtn_ToolDirection',
					iconCls: 'get-direction16',
					tooltip: {
						text: 'Direction to location'
					}
				}, {
					id: 'tbtn_ToolDistance',
					iconCls: 'get-distance16',
					tooltip: {
						text: 'Measure distance'
					}
				}, {
					id: 'tbtn_ToolAddress',
					iconCls: 'get-address16',
					enableToggle: true,
					toggleGroup: 'tooladdress',
					tooltip: {
						text: 'Get street address on drop point'
					}
				}, {
					id: 'tbtn_ToolCoordinate',
					iconCls: 'get-coordinate16',
					enableToggle: true,
					toggleGroup: 'toolcoordinate',
					tooltip: {
						text: 'Get coordinates on drop point'
					}
				}]
			}]
		}, {
			border: false,
			split: true,
			xtype: 'panel',
			id: 'tpnl_ToolExtend',
			tbar: [{
				xtype: 'buttongroup',
				id: 'tgrp_ExtdFunction',
				dock: 'top',
				title: 'Extend Functions',
				columns: 2,
				width: 174,
				defaults: {
					scale: 'small'
				},
				items: [{
					id: 'tbtn_ExtdPreview',
					text: 'Preview',
					iconCls: 'preview16',
					tooltip: {
						text: 'Print'
					}
				},{
					id: 'tbtn_ExtdToPDF',
					text: 'Export to PDF ',
					iconCls: 'pdf16',
					tooltip: {
						text: 'Export to PDF'
					}
				},{
					id: 'tbtn_ExtdEmail',
					text: 'EMail &nbsp;&nbsp;&nbsp;',
					iconCls: 'email16',
					tooltip: {
						text: 'EMail'
					}
				},{
					id: 'tbtn_ExtdToXLS',
					text: 'Export to XLS ',
					iconCls: 'xls16',
					tooltip: {
						text: 'Export to Excel'
					}
				}]
			}]
		}]
	});
});

