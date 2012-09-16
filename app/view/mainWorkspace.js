Ext.require([
    'Ext.ux.GMapPanel'
]);
Ext.define('SDS.view.mainWorkspace', {
	extend: 'Ext.Panel',
	alias: 'widget.mainworkspace',
	layout: 'fit',
	border: false,
	x: 40,
	y: 60,
	items: [{
		xtype: 'gmappanel',
		border: false,
		zoomLevel: 14,
		gmapType: 'map',
		mapConfOpts: ['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
		mapControls: ['GSmallMapControl','GMapTypeControl','NonExistantControl'],
		setCenter: {
			geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
			marker: {title: 'Fenway Park'}
		},
		markers: [{
			lat: 42.339641,
			lng: -71.094224,
			marker: {title: 'Boston Museum of Fine Arts'},
			listeners: {
				click: function(e){
					Ext.Msg.alert({title: 'Its fine', text: 'and its art.'});
				}
			}
		},{
			lat: 42.339419,
			lng: -71.09077,
			marker: {title: 'Northeastern University'}
		}]
	}]
});