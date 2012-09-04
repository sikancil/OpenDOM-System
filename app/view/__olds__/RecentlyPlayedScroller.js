Ext.define('SDS.view.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.recentlyplayedscroller',    
    store: 'RecentSongs',
    itemTpl: '<div>{name}</div>'
});