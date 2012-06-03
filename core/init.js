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
	
	/**
	 * ExtJS:
	 * Search location as address or even coordinates on map
	 */
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
								callback: function(zoom){ zoomBestFit = zoom; }
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
	 * Goto default HomeScreen location
	 */
	var elToolHome = Ext.getCmp('tbtn_ToolHome');
	elToolHome.on('click', function(){
		$('#map_canvas').gmap3({
			action: 'getAddress',
			address: 'Bandung, Indonesia', /* this must be the correct home screen value setup */
			callback: function(results){
				if (!results) return;
				
				var zoomBestFit = 10;
				$("#map_canvas").gmap3(
					{	action: 'getMaxZoom',
						latLng: results[0].geometry.location,
						callback: function(zoom){ zoomBestFit = zoom; }
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
	});
	
	/**
	 * ExtJS:
	 * Get on drop point Geo Address
	 */
	var elToolAddress = Ext.getCmp('tbtn_ToolAddress');
	elToolAddress.on('click', function() {
		$('#map_canvas').gmap3({
			action: 'clear',
			name: 'marker',
			tag: 'addr'
		}, {
			action: 'addMarker',
			address: 'Bandung, Indonesia', /* this must be current position with droped point on center */
			map: {
				center: true,
				//mapTypeId: google.maps.MapTypeId.HYBRID
			},
			marker: {
				tag: 'addr',
				options: {
					draggable:true
				},
				events: {
					dragend: function(marker) {
						$(this).gmap3({
							action: 'getAddress',
							latLng: marker.getPosition(),
							callback: function(results) {
								var map = $(this).gmap3('get'),
									infowindow = $(this).gmap3({action:'get', name:'infowindow'}),
									content = results && results[1] ? results && results[1].formatted_address : 'no address';
								if (infowindow) {
									infowindow.open(map, marker);
									infowindow.setContent(content);
								} else {
									$(this).gmap3({action:'addinfowindow', anchor:marker, options:{content: content}});
								}
							}
						});
					}
				}
			}
		});
	});
	
	/**
	 * ExtJS:
	 * Get on drop point Geo Coordinates
	 */
	var elToolCoordinate = Ext.getCmp('tbtn_ToolCoordinate');
	elToolCoordinate.on('click', function() {
		$('#map_canvas').gmap3({
			action: 'clear',
			name: 'marker',
			tag: 'coor'
		}, {
			action: 'addMarker',
			address: 'Indonesia', /* this must be current position with droped point on center */
			map: {
				center: true,
				//mapTypeId: google.maps.MapTypeId.HYBRID
			},
			marker: {
				tag: 'coor',
				options: {
					draggable:true
				},
				events: {
					dragend: function(marker) {
						$(this).gmap3({
							action: 'getAddress',
							latLng: marker.getPosition(),
							callback: function(results) {
								var map = $(this).gmap3('get'),
									infowindow = $(this).gmap3({action:'get', name:'infowindow'}),
									content = results && results[1] ? results && results[1].formatted_address : 'no address';
								if (infowindow) {
									infowindow.open(map, marker);
									infowindow.setContent(content);
								} else {
									$(this).gmap3({action:'addinfowindow', anchor:marker, options:{content: content}});
								}
							}
						});
					}
				}
			}
		});
	});
	
	/**
	 * ExtJS:
	 * Get Measure Distance from 2 (two) different locations.
	 * It will be great if using the directions route function
	 * and may using other points between (via) the begin and end route. 
	 */
	var elToolDistance = Ext.getCmp('tbtn_ToolDistance');
	elToolDistance.on('click', function() {
		var winDist = null;
		if (!winDist) {
			var formDist = Ext.widget('form', {
				id: 'frmDist',
				border: false,
				bodyPadding: '6 6 2 6',
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				defaultType: 'textfield',
				items: [{
					name: 'edOrigDist',
					emptyText: 'Origin',
					allowBlank: false
				}, {
					name: 'edDestDist',
					emptyText: 'Destination',
					allowBlank: false
				}, {
					xtype: 'component',
					height: 1,
					margin: '4 0 4 0',
					html: '<div style="height:1px; border-bottom: red 1px dotted;"></div>'
				}, {
					name: 'edResDist',
					fieldLabel: '&nbsp;Result <span style="font-size:10px; font-style:italic;">(approx)</span>&nbsp;',
					emptyText: '... (...)',
					allowBlank: true,
					style: 'background-color: rgba(178, 255, 74, 0.7);',
					fieldStyle: 'background-color: rgba(178, 255, 74, 0.7);',
					readOnly: true
				}],
				buttons: [{
					text: 'Clear',
					handler: function() {
						this.up('form').getForm().reset();
						this.up('form').getForm().findField('edOrigDist').focus();
					}
				}, {
					text: 'OK',
					formBind: true,
					disabled: false,
					handler: function() {
						var formDist = this.up('form').getForm();
						if (formDist.isValid()) {
							var orig = formDist.getValues()['edOrigDist'];
							var dest = formDist.getValues()['edDestDist'];
							
							$('#map_canvas').gmap3({
								action: 'getDistance',
								options: { 
									origins: [orig], 
									destinations: [dest],
									travelMode: google.maps.TravelMode.DRIVING
								},
								callback: function(results){
									var html = '';
									
									if (results){
										for (var i = 0; i < results.rows.length; i++) {
											var elements = results.rows[i].elements;
											
											for (var j=0; j<elements.length; j++) {
												switch (elements[j].status) {
													case google.maps.DistanceMatrixStatus.OK:
														html = elements[j].distance.text + ' (' + elements[j].duration.text + ')';
														break;
													case google.maps.DistanceMatrixStatus.NOT_FOUND:
														html = 'The origin and/or destination of this pairing could not be geocoded.';
														break;
													case google.maps.DistanceMatrixStatus.ZERO_RESULTS:
														html = 'No route could be found between the origin and destination.';
														break;
												}
											}
										} 
									} else {
										html = 'error!.';
									}
									formDist.findField('edResDist').setValue(html);
								}
							});
						}
					}
				}]
			});
			
			winDist = Ext.widget('window', {
				id: 'winDist',
				title: 'Measure Distance',
				width: 300,
				layout: 'fit',
				modal: true,
				items: formDist
			});
		}
		
		winDist.show();
		formDist.getForm().findField('edOrigDist').focus();
	});
	
	/**
	 * ExtJS:
	 * Get Direction Route from 2 (two) different locations.
	 * It will be great if may add other points between (via) the begin and end route.
	 */
	var elToolDirection = Ext.getCmp('tbtn_ToolDirection');
	elToolDirection.on('click', function() {
		var winRout = null;
		if (!winRout) {
			var formRout = Ext.widget('form', {
				id: 'frmRout',
				border: false,
				bodyPadding: '6 6 2 6',
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				defaultType: 'textfield',
				items: [{
					name: 'edOrigRout',
					emptyText: 'Origin',
					allowBlank: false
				}, {
					name: 'edDestRout',
					emptyText: 'Destination',
					allowBlank: false
				}, {
					xtype: 'component',
					height: 1,
					margin: '4 0 4 0',
					html: '<div style="height:1px; border-bottom: red 1px dotted;"></div>'
				}, {
					name: 'edResRoute',
					fieldLabel: '&nbsp;Result <span style="font-size:10px; font-style:italic;">(approx)</span>&nbsp;',
					emptyText: '... (...)',
					allowBlank: true,
					style: 'background-color: rgba(178, 255, 74, 0.7);',
					fieldStyle: 'background-color: rgba(178, 255, 74, 0.7);',
					readOnly: true
				}],
				buttons: [{
					text: 'Clear',
					handler: function() {
						this.up('form').getForm().reset();
						this.up('form').getForm().findField('edOrigRout').focus();
					}
				}, {
					text: 'OK',
					formBind: true,
					disabled: false,
					handler: function() {
						var form = this.up('form').getForm();
						if (form.isValid()) {
							var orig = form.getValues()['edOrigRout'];
							var dest = form.getValues()['edDestRout'];
							
							$('#map_canvas').gmap3({
								action: 'clear',
								name:'directionrenderer'
							}, {
								action: 'getRoute',
								options: { 
									origin: orig,
									destination: dest,
									travelMode: google.maps.DirectionsTravelMode.DRIVING
								},
								callback: function(results){
									console.log(results);
									if (!results) return;
									
									var xctr = '';
									xctr = $(this).gmap3({
										action: 'getAddress',
										address: orig
									});
									console.log(xctr);
									
									$(this).gmap3({
										action: 'init',
										options: {
											zoom: 12,
											center: xctr,
											mapTypeId: google.maps.MapTypeId.ROADMAP
										}
									}, {
										action: 'addDirectionsRenderer',
										options:{     
											preserveViewport: true,
											markerOptions: {
												visible: true
											},
											draggable: true,
											directions: results
										}
									});
								}
							});
						}
					}
				}]
			});
			
			winRout = Ext.widget('window', {
				id: 'winRout',
				title: 'Direction Route',
				width: 300,
				layout: 'fit',
				modal: false,
				items: formRout
			});
		}
		
		winRout.show();
		formRout.getForm().findField('edOrigRout').focus();
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