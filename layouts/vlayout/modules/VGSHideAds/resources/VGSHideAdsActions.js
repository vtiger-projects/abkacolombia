jQuery.Class("VGSHideAds_Js",{},{registerEvents:function(){var e=app.getModuleName();var t=app.cacheGet("ExtensionStore_Promotion_CloseDate",null);if(t==null){getPromotion=true}else if(t.length>0){var n=t.split("-");var r=new Date(parseInt(n[0]),parseInt(n[1]),parseInt(n[2]));var i=new Date;var s=i.getTime()-r.getTime();var o=s/(1e3*60*60*24);if(o>=7){getPromotion=true}else{getPromotion=false}}if(e=="Home"&&getPromotion){jQuery(".togglePromotion").find(".icon-chevron-up").addClass("hide");jQuery(".togglePromotion").find(".icon-chevron-down").removeClass("hide");jQuery(".togglePromotion").addClass("down").removeClass("up");jQuery(".dashboardHeading").addClass("no-show").removeClass("dashboardHeading");jQuery(".no-show").css("padding-top","10px");jQuery(".no-show").css("background","#f5f5f5");var u=new Date;var i=u.getUTCFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate();app.cacheSet("ExtensionStore_Promotion_CloseDate",i)}}});jQuery(document).ready(function(){var e=app.getModuleName();if(e=="Home"){var t=new VGSHideAds_Js;t.registerEvents()}})