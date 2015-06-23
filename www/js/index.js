/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.addEventListener("backbutton", onBackKeyDown, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};


/*
 *	Disco.vere main application code 
 */
 
// 'global' variables
var toggle_loading = true;
var search_query = "";
var clientID = "9efa09e998c48f23a554e02042d84a91";

// use the android back key functionality [not implemented]
function onBackKeyDown(evt) {
	evt.preventDefault();
	evt.stopPropagation();
	if($('.section').data('section').val() == "profile") {
		$('#content').html('');
	}
}

// simple loading bar loop
function loading() {
	$( "#dot" ).animate({"margin-left": "100%"}, 2000, function(){
		$(this).css("margin-left", "-3px");
		if(toggle_loading) {
			loading();
		}
	});
}

// callback for when the window has completely loaded
$(window).load( function() { toggle_loading = false; } );

// when the document is ready, do stuff
$(document).ready(function() {

	SC.initialize({
		client_id: clientID
	});

	var playing_id = "";
	var playing_img;

	$('#content').on('click', '.cell', displayArtistProfile);
	$('#content').on('click', '.play', playSong);
	$('#search').keypress(getSimilar);

	function autocomplete() {
			console.log("auto complete fired");
			var query = $('#query').val();
			var url = 	"http://developer.echonest.com/api/v4/artist/suggest?api_key=" +
						"DW2FLRWMOF77QF6S8" +
						"&format=json" +
						"&name=" + query +
						"&results=5";

			$.get(url, function(data, status) {
				var a = data.response.artists;
				$('#auto_search').html('');
				for(var i = 0; i < a.length; i++) { 
					var obj = $("<div class='suggest'>"+a[i].name+"</div>");
					obj.on('click', function() {
						search_query = $(this).text();
						$('#auto_search').html('').toggle();
						$('#query').val(search_query);
						var e = $.Event("keydown", { keyCode: 13}); //"keydown" if that's what you're doing
						e.which = 13;
						getSimilar(e);
						console.log("clicked option");
						
					});
					$('#auto_search').append(obj);
				}
			});
	}
	
	function playSong() {
		
		playing_img = $(this);
		if(!SC.sound || playing_id != $(this).parent().attr('id')) {
			playing_img.attr("src", "img/pause.png");
			toggle_loading = true;
			loading();

			SC.stream("/tracks/"+$(this).parent().attr('id'), function(sound){
				if(SC.sound) {
					$('.play').each(function(i, v){ $(this).attr("src", "img/play.png") });
					SC.sound.stop();
				}
				SC.sound = sound;
				SC.sound.play();
				playing_id = $(this).parent().attr('id');

				toggle_loading = false;
			});
		} else if(playing_id == $(this).parent().attr('id')) {
			if(playing_img.attr("src") == "img/pause.png") { 
				SC.sound.pause();
				playing_img.attr("src", "img/play.png");
			} else if(playing_img.attr("src") == "img/play.png") { 
				SC.sound.play();
				playing_img.attr("src", "img/pause.png");
			}
		}

	}

	function displayArtistProfile() {
		
		// get artst cell data
		var $name = $(this).children('h2').text();
		var $tags = $(this).children('p').text();
		var videos = $(this).children('span');
		
		//var video = {url: $(this).children('span').data('url'), site: $(this).children('span').data('site')};
		//var video_html = "http://www.dailymotion.com/embed/video/"+video.url.substring(video.url.indexOf("video/")+6, video.url.indexOf("_"));
		//console.log(video_html);
		
		var bg = $(this).css('background-image').replace('url(','').replace(')','');
		var section = "";
		var $html = "<div id='header'><span class='section' data-section='"+section+"'></span><h2>"+$name+"</h2><p>"+$tags+"</p></div>"
		$html += "<div class='midbar'></div>";
		$('#content').html($html);
		$('#header').css({'background-image': "url('"+bg+"')"});
		//in_artist = true;
		var client_id = "9efa09e998c48f23a554e02042d84a91";
		console.debug(videos);
		
		$(videos).each(function(i, v) {
			var video = {url: $(this).data('url'), site: $(this).data('site')}
			var video_html = "http://www.dailymotion.com/embed/video/"+video.url.substring(video.url.indexOf("video/")+6, video.url.indexOf("_"));
			$('#content').append("<iframe src='"+video_html+"&network=cellular&quality=240&related=0' width='100%' height='75px'></iframe>");
		});
		//$('#content').append("<iframe src='"+video_html+"&network=cellular&quality=240&related=0' width='100%' height='75px'></iframe>");
/*
		SC.get('/tracks', { q: $name, license: '' }, function(tracks) {
			console.debug(tracks);
			tracks.sort(function (a, b) {
			    return b.playback_count - a.playback_count;
			});
			for(var i = 0; i < tracks.length; i++) {
				var tmp_str = ""+tracks[i].title.toLowerCase();
				if(tmp_str.indexOf("remix") < 0) {
				
					$('#content').append("	<div class='song' id='"+tracks[i].id+"'>"+
										 "		<img class='play' src='img/play.png'/>" +
										 
										 "		<p class='track_info'>" +
										 "			<h4>"+tracks[i].title+"</h4>"+
										 "			Uploader: <a href='"+tracks[i].permalink_url+"' target='_blank'>"+tracks[i].user.username+"</a>" + 
										 "			<img src='img/logo_black.png' style='height: 8px; opacity: .6; float: right;'/>" +
										 "		</p>" +
										 "		<div class='clr'></div>" +
										 "	</div>");
					
				}
			}
			$('.song').each(function(index, value){
				$(this).css({"background-color": (index % 2 == 0 ? "#F5F5F5": "#EEE")}); 
			});
		});
*/
	}
	
	function runSearch( event ) {
		
	}
	
	function getSimilar( event ) {
		search_query = $('#query').val();
		if ( event.which == 13 ) {
			event.preventDefault();
			toggle_loading = true;
			$('#auto_search').html('').toggle();
			loading();
			$('#query').blur();
			
			$('#content').html('');

			var url = 	"http://developer.echonest.com/api/v4/artist/search?api_key=" +
						"DW2FLRWMOF77QF6S8" +
						"&format=json" +
						"&name=" + search_query +
						"&results=1" +
						"&bucket=images" +
						"&bucket=genre" +
						"&bucket=biographies" +
						"&bucket=songs" +
						"&bucket=video";
			
			var $artists;
			$.get(url, getArtist);
			
		} else if(search_query.length > 0) {
			autocomplete();
		}
	}
	
	function getArtist(data, status) {
		search_query = $('#query').val();
		$artists = data.response.artists;
		var similarUrl = 	"http://developer.echonest.com/api/v4/artist/similar?api_key=" +
							"DW2FLRWMOF77QF6S8" +
							"&format=json" +
							"&name=" + search_query +
							"&results=10" +
							"&bucket=images" +
							"&bucket=genre" +
							"&bucket=biographies" +
							"&bucket=songs" +
							"&bucket=video";
		console.debug($artists);
		for(var index = 0; index < $artists.length; index++) {
			//var imageUrl = $artists[index].images[0].url;
			var id = 'art'+($artists.length > 1 ? index+1 : 0);
			
			var tags = "<p>"+($artists[index].genres[0] != undefined ? $artists[index].genres[0].name : "")+"</p>";
			//$($artists[index].genres).each(function(index, value){
			//	tags += "#"+value.name+" ";
			//});
			//tags += "</p>";
			
			var name = "<h2 id='name'>"+$artists[index].name+"</h2>";
			console.debug($artists[index].video);
			
			var vidz = [];
			var count = 0;
			while(vidz.length < 5 && !(count >= $artists[index].video.length)) {
				if($artists[index].video[count].site == "dailymotion.com")
					vidz.push("<span class='videos' data-url='"+$artists[index].video[count].url+"' data-site='"+$artists[index].video[count].site+"'></span>");
				count++;
			}
			
			
			//var youtube = "<span class='videos' data-url='"+$artists[index].video[0].url+"' data-site='"+$artists[index].video[0].site+"'></span>";
			/*<a href="./page1" class="animsition-link">animsition link 1</a>*/
			var cell = "<div class='cell' id='"+id+"'>"+name+tags+vidz.toString().replace(',', '')+"</div>";
			
			$('#content').append(cell);
			
			var default_img = 'img/placeholder' + Math.floor((Math.random()*3) + 1) + '.jpg';
			$('#'+id).css('background-image', 'url('+default_img+')');
			
			//fetchImage(id, $artists[index].images, 0);
			var img = $artists[index].images[0].url;
			$('#'+id).css('background-image', 'url('+img+')');
			$('.cell').css({height: '70px', opacity: '0.7'});

		}
		if($artists.length == 1) { 
			$.get(similarUrl, getArtist); 
		}
		if($artists.length > 1) toggle_loading = false;
		window.plugins.toast.show('(ﾉ≧∀≦)ﾉ Success!', 'long', 'bottom');
				
	}
	
	function fetchImage(id, imagelist, attempt) {
		var imgUrl = imagelist[attempt].url;
		var request;
		  request = $.ajax({
		    type: "HEAD",
		    url: imgUrl,
		    success: function () {
		      console.log("Size is " + request.getResponseHeader("Content-Length"));
		    }
		  });
	}


});















