Ext.onReady(function(){
	/**
	 * jQuery:
	 * Set hide to StartMenu button at first time to show FadeIn effect,
	 * Set hide StartMenu panel at first time to show SlideDown/Up effect
	 */
	$('#startmenu_btn').hide();
	$('#startmenu_pnl').hide('fast');
	
	/**
	 * jQuery GMap3:
	 * Init GMap v3 as MapCanvas
	 * for the first opening or on page refresh
	 */
	$('#map_canvas').gmap3({
		/* Set GoogleMaps Init event */
		action: 'init',
		
		/* Set GoogleMaps Init Options */
		options:{
			/**
			 * Set default Center and Zoom options
			 */
			center:[22.49156846196823, 89.75802349999992],
			zoom:2,
			
			/**
			 * Set default GoogleMaps -> MapType
			 */
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			mapTypeControl: false,
			/**
			 * Set default GoogleMaps -> MapType Control Option
			 * {position, style}
			 * Unused, since we change the control options and UI
			 * to MapsType Toolbar ButtonGroup
			 * ------------------------------------------------------
				mapTypeControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM,
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				},
			 */
			
			/**
			 * Set default GoogleMaps -> ZoomControl
			 */
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_TOP,
				style: google.maps.NavigationControlStyle.SMALL
			},
			
			/**
			 * Set default GoogleMaps -> ZoomControl
			 */
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			
			/**
			 * Set default GoogleMaps -> ZoomControl
			 */
			scaleControl: true,
			scaleControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_LEFT,
				style: google.maps.NavigationControlStyle.DEFAULT
			},
			
			/**
			 * Set default GoogleMaps -> PanControl
			 */
			panControl: false,
			panControlOptions: {
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			
			/**
			 * Set default GoogleMaps -> RotateControl
			 */
			rotateControl: false,
			rotateControlOptions: {
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			
			/**
			 * Set default GoogleMaps -> Enable ScrollWheel on active map element
			 */
			scrollwheel: true
		}
	});
	/**
	 * jQuery GMap3:
	 * Get the GoogleMaps Element for direct actions
	 * var map = $('#map_canvas').gmap3('get');
	 */
	
	/**
	 * jQuery:
	 * Set FadeIn effect to show StartMenu button
	 */
	$('#startmenu_btn').fadeTo(3000, 1);
	
	/**
	 * jQuery:
	 * StartMenu button toggle function on click to show/hide with
	 * SlideDown/Up effect. And patch fixed width of panel to 178px.
	 */
	$('#startmenu_btn').toggle(function() {
		$('#startmenu_pnl').slideDown('slow');
	}, function(){
		$('#startmenu_pnl').slideUp('slow');
	});
	$('#startmenu_bar').width('178px').show();
	
	/**
	 * ExtJS:
	 * Get direct ExtJS Toolbar ButtonGroup element;
	 * toggleGroup as: 'maptype'
	 * to set each component onClick event
	 */
	var elTypeRelief = Ext.getCmp('tbtn_TypeRelief');
	elTypeRelief.toggle(true,true);
	elTypeRelief.on('click', function(){
		if (this.pressed) {
			$('#map_canvas').gmap3({action:"setMapTypeId", args:[google.maps.MapTypeId.TERRAIN]});
		}
	});
	var elTypeSatellite = Ext.getCmp('tbtn_TypeSatellite');
	elTypeSatellite.on('click', function(){
		if (this.pressed) {
			$('#map_canvas').gmap3({action:"setMapTypeId", args:[google.maps.MapTypeId.SATELLITE]});
		}
	});
	var elTypeStreet = Ext.getCmp('tbtn_TypeStreet');
	elTypeStreet.on('click', function(){
		if (this.pressed) {
			$('#map_canvas').gmap3({action:"setMapTypeId", args:[google.maps.MapTypeId.ROADMAP]});
		}
	});
	var elTypeHybrid = Ext.getCmp('tbtn_TypeHybrid');
	elTypeHybrid.on('click', function(){
		if (this.pressed) {
			$('#map_canvas').gmap3({action:"setMapTypeId", args:[google.maps.MapTypeId.HYBRID]});
		}
	});
	
	var elToolSearch = Ext.getCmp('tbtn_ToolSearch');
	elToolSearch.on('click', function(){
		Ext.Msg.prompt('Search Location', 'Please enter location name:', function(btn, text){
			if (btn == 'ok'){
				$('#map_canvas').gmap3({
					action: 'getAddress',
					address: text,
					callback: function(results){
						if (!results) return;
						var zoomBestFit = 10;
						$("#map_canvas").gmap3(
							{	action: 'getMaxZoom',
								latLng: results[0].geometry.location,
								callback: function(zoom){ zoomBestFit = zoom - 1; }
							},
							{	action: 'clear',
								name:'marker'
							},
							{	action: 'addMarker',
								latLng: results[0].geometry.location,
								map: { center: true, zoom: zoomBestFit }
							}
						);
					}
				});
			}
		});
	});
	
	/**
	 * ExtJS:
	 * Get direct ExtJS Toolbar ButtonGroup element;
	 * GrabHand element and 
	 * to set component onClick event
	 */
	var elGrabHand = Ext.getCmp('tbtn_GrabHand');
	elGrabHand.toggle(true,true);
	elGrabHand.on('click', function(){
		if (this.pressed) {
			/* unpressed some buttons */
		}
	});
});