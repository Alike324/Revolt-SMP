"Notification"in window||(window.Notification=null),1==loggedIn&&(($(".pms").length||$(".alerts").length)&&($(document).ready((function(){Notification&&"granted"!==Notification.permission&&Notification.requestPermission(),$.getJSON(URLBuild("queries/pms"),(function(e){var s=$(".pm_dropdown");if(e.value>0){if($(".pms").html('<div class="alert-msg-icon"><i class="fa fa-exclamation-circle custom-nav-exclaim"></i></div>'),s.html()==loading){var a="";for(i in e.pms)a+='<a class="dropdown-item alert-msg-list" href="'+URLBuild("user/messaging?action=view&amp;message="+e.pms[i].id)+'">'+e.pms[i].title+"</a>";s.html(a),s.removeClass("dropdown-item")}}else s.html("<span>"+noMessages+"</span>"),s.addClass("noclick")})),$.getJSON(URLBuild("queries/alerts"),(function(e){var s=$(".alert_dropdown");if(e.value>0){if($(".alerts").html('<div class="alert-msg-icon"><i class="fa fa-exclamation-circle custom-nav-exclaim"></i></div>'),s.html()==loading){var a="";for(i in e.alerts)a+='<a class="dropdown-item alert-msg-list" href="'+URLBuild("user/alerts?view="+e.alerts[i].id)+'">'+e.alerts[i].content_short+"</a>";s.html(a),s.removeClass("dropdown-item")}}else s.html("<span>"+noAlerts+"</span>"),s.addClass("noclick")})),window.setInterval((function(){$.getJSON(URLBuild("queries/pms"),(function(e){if(e.value>0&&$(".pms").is(":empty")){if($(".pms").html('<div class="alert-msg-icon"><i class="fa fa-exclamation-circle custom-nav-exclaim"></i></div>'),1!==e.value)var s=newMessagesX;var a=$(".pm_dropdown"),t="";for(i in e.pms)t+='<a class="dropdown-item alert-msg-list" href="'+URLBuild("user/messaging?action=view&amp;message="+e.pms[i].id)+'">'+e.pms[i].title+"</a>";if(a.html(t),a.removeClass("dropdown-item"),"granted"!==Notification.permission)Notification.requestPermission();else{if(1==e.value)var o=new Notification(siteName,{body:newMessage1});else o=new Notification(siteName,{body:s.replace("{x}",e.value)});o.onclick=function(){window.open(URLBuild("user/messaging",!0))}}}})),$.getJSON(URLBuild("queries/alerts"),(function(e){if(e.value>0&&$(".alerts").is(":empty")){if($(".alerts").html('<div class="alert-msg-icon"><i class="fa fa-exclamation-circle custom-nav-exclaim"></i></div>'),1!==e.value)var s=newAlertsX;var a=$(".alert_dropdown"),t="";for(i in e.alerts)t+='<a class="dropdown-item alert-msg-list" href="'+URLBuild("user/alerts?view="+e.alerts[i].id)+'">'+e.alerts[i].content_short+"</a>";if(a.html(t),a.removeClass("dropdown-item"),"granted"!==Notification.permission)Notification.requestPermission();else{if(1==e.value)var o=new Notification(siteName,{body:newAlert1});else o=new Notification(siteName,{body:s.replace("{x}",e.value)});o.onclick=function(){window.open(URLBuild("user/alerts",!0))}}}}))}),2e4)})),$(".alert-dropdown, .user-dropdown, .pm-dropdown").hover((function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(50).fadeIn("fast")}),(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(275).fadeOut("fast")})),$(".alert-dropdown-menu, .user-dropdown-menu, .pm-dropdown-menu").hover((function(){$(this).stop(!0,!0)}),(function(){$(this).stop(!0,!0).delay(275).fadeOut("fast")}))),$("div.show-punishment").length&&$(".show-punishment").modal("show"));