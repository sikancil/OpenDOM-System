Ext.define('SDS.view.mainHeader', {
    extend: 'Ext.Panel',
    alias: 'widget.mainheader',
    layout: 'border',
	border: false,
	padding: '1',
	height: 48,
    items:[{
		region: 'west',
		width: 179,
		split: false,
		border: false,
		bodyStyle: 'background:transparent;',
		html: '<div style="width:179px; height:48px; background:#fff; text-align:center;">Logo</div>'
    }, {
		region: 'east',
		width: 199,
		split: false,
		border: false,
		bodyStyle: 'background:transparent;',
		html: '<div style="width:199px; height:48px; background:#99bce8; text-align:center;">Users</div>'
	}, {
		region: 'center',
		split: false,
		border: false,
		bodyStyle: 'background:transparent;',
		html: '<div style="height:48px; background:#fff; text-align:left; padding:0 6px 0 6px;">Distribution and Object Mapping | MainMenu | etc..</div>'
	}]
});