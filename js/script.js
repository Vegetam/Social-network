var tweetUsers = ['google'];
var buildString = "";

$(document).ready(function(){

	$('#twitter-ticker').slideDown('slow');
jQuery('#tweets').tweetable({
				username: 'google', 
				time: true,
				rotate: false,
				speed: 3000, 
				limit: 5,
				replies: false,
				position: 'append',
				failed: "Sorry, twitter is currently unavailable for this user.",
				loading: "Loading tweets...",
				html5: true,
				onComplete:function($ul){
					$('time').timeago();
				}
			});
		});
