!function(t,e,i,n){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.4.7",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(t,e,i){var n=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(e,i),n.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(n.S("li",this.scope)):n.S("["+this.attr_name()+"]",this.scope).each(function(){n.assemble(n.S("li",this))})},events:function(n){var s=this,a=s.S,o=t(".scroll-container");o.length>0&&(this.scope=o),a(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(t,e,i){var e=e||a(this),i=i||e,n=e.next("li"),o=e.closest("["+s.attr_name()+"]").data(s.attr_name(!0)+"-init"),r=a(t.target);t.preventDefault(),o||(s.init(),o=e.closest("["+s.attr_name()+"]").data(s.attr_name(!0)+"-init")),i.hasClass("visible")&&e[0]===i[0]&&n.length>0&&s.is_open(e)&&(i=n,r=a("img",i)),s.open(r,e,i),s.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(t){s.nav(t,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(t){s.nav(t,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(t){Foundation.libs.clearing.close(t,this)}),t(i).on("keydown.fndtn.clearing",function(t){s.keydown(t)}),a(e).off(".clearing").on("resize.fndtn.clearing",function(){s.resize()}),this.swipe_events(n)},swipe_events:function(t){var e=this,i=e.S;i(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:n};i(this).data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var n=i(this).data("swipe-transition");if("undefined"==typeof n&&(n={}),n.delta_x=t.touches[0].pageX-n.start_page_x,Foundation.rtl&&(n.delta_x=-n.delta_x),"undefined"==typeof n.is_scrolling&&(n.is_scrolling=!!(n.is_scrolling||Math.abs(n.delta_x)<Math.abs(t.touches[0].pageY-n.start_page_y))),!n.is_scrolling&&!n.active){t.preventDefault();var s=n.delta_x<0?"next":"prev";n.active=!0,e.nav(t,s)}}}).on("touchend.fndtn.clearing",".visible-img",function(t){i(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(e){var i=e.parent();if(!i.parent().hasClass("carousel")){i.after('<div id="foundationClearingHolder"></div>');var n=i.detach(),s="";if(null!=n[0]){s=n[0].outerHTML;var a=this.S("#foundationClearingHolder"),o=i.data(this.attr_name(!0)+"-init"),r={grid:'<div class="carousel">'+s+"</div>",viewing:o.templates.viewing},l='<div class="clearing-assembled"><div>'+r.viewing+r.grid+"</div></div>",c=this.settings.touch_label;Modernizr.touch&&(l=t(l).find(".clearing-touch-label").html(c).end()),a.after(l).remove()}}},open:function(e,n,s){function a(){setTimeout(function(){this.image_loaded(h,function(){1!==h.outerWidth()||p?o.call(this,h):a.call(this)}.bind(this))}.bind(this),100)}function o(e){var i=t(e);i.css("visibility","visible"),l.css("overflow","hidden"),c.addClass("clearing-blackout"),d.addClass("clearing-container"),u.show(),this.fix_height(s).caption(r.S(".clearing-caption",u),r.S("img",s)).center_and_label(e,f).shift(n,s,function(){s.closest("li").siblings().removeClass("visible"),s.closest("li").addClass("visible")}),u.trigger("opened.fndtn.clearing")}var r=this,l=t(i.body),c=s.closest(".clearing-assembled"),d=r.S("div",c).first(),u=r.S(".visible-img",d),h=r.S("img",u).not(e),f=r.S(".clearing-touch-label",d),p=!1;t("body").on("touchmove",function(t){t.preventDefault()}),h.error(function(){p=!0}),this.locked()||(u.trigger("open.fndtn.clearing"),h.attr("src",this.load(e)).css("visibility","hidden"),a.call(this))},close:function(e,n){e.preventDefault();var s,a,o=function(t){return/blackout/.test(t.selector)?t:t.closest(".clearing-blackout")}(t(n)),r=t(i.body);return n===e.target&&o&&(r.css("overflow",""),s=t("div",o).first(),a=t(".visible-img",s),a.trigger("close.fndtn.clearing"),this.settings.prev_index=0,t("ul["+this.attr_name()+"]",o).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),s.removeClass("clearing-container"),a.hide(),a.trigger("closed.fndtn.clearing")),t("body").off("touchmove"),!1},is_open:function(t){return t.parent().prop("style").length>0},keydown:function(e){var i=t(".clearing-blackout ul["+this.attr_name()+"]"),n=this.rtl?37:39,s=this.rtl?39:37,a=27;e.which===n&&this.go(i,"next"),e.which===s&&this.go(i,"prev"),e.which===a&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(e,i){var n=t("ul["+this.attr_name()+"]",".clearing-blackout");e.preventDefault(),this.go(n,i)},resize:function(){var e=t("img",".clearing-blackout .visible-img"),i=t(".clearing-touch-label",".clearing-blackout");e.length&&(this.center_and_label(e,i),e.trigger("resized.fndtn.clearing"))},fix_height:function(t){var e=t.parent().children(),i=this;return e.each(function(){var t=i.S(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%"),this},update_paddles:function(t){t=t.closest("li");var e=t.closest(".carousel").siblings(".visible-img");t.next().length>0?this.S(".clearing-main-next",e).removeClass("disabled"):this.S(".clearing-main-next",e).addClass("disabled"),t.prev().length>0?this.S(".clearing-main-prev",e).removeClass("disabled"):this.S(".clearing-main-prev",e).addClass("disabled")},center_and_label:function(t,e){return this.rtl?(t.css({marginRight:-(t.outerWidth()/2),marginTop:-(t.outerHeight()/2),left:"auto",right:"50%"}),e.length>0&&e.css({marginRight:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10,left:"auto",right:"50%"})):(t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(t.outerHeight()/2)}),e.length>0&&e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10})),this},load:function(t){var e;return e="A"===t[0].nodeName?t.attr("href"):t.parent().attr("href"),this.preload(t),e?e:t.attr("src")},preload:function(t){this.img(t.closest("li").next()).img(t.closest("li").prev())},img:function(t){if(t.length){var e=new Image,i=this.S("a",t);i.length?e.src=i.attr("href"):e.src=this.S("img",t).attr("src")}return this},caption:function(t,e){var i=e.attr("data-caption");return i?t.html(i).show():t.text("").hide(),this},go:function(t,e){var i=this.S(".visible",t),n=i[e]();this.settings.skip_selector&&0!=n.find(this.settings.skip_selector).length&&(n=n[e]()),n.length&&this.S("img",n).trigger("click",[i,n]).trigger("click.fndtn.clearing",[i,n]).trigger("change.fndtn.clearing")},shift:function(t,e,i){var n,s=e.parent(),a=this.settings.prev_index||e.index(),o=this.direction(s,t,e),r=this.rtl?"right":"left",l=parseInt(s.css("left"),10),c=e.outerWidth(),d={};e.index()===a||/skip/.test(o)?/skip/.test(o)&&(n=e.index()-this.settings.up_count,this.lock(),n>0?(d[r]=-(n*c),s.animate(d,300,this.unlock())):(d[r]=0,s.animate(d,300,this.unlock()))):/left/.test(o)?(this.lock(),d[r]=l+c,s.animate(d,300,this.unlock())):/right/.test(o)&&(this.lock(),d[r]=l-c,s.animate(d,300,this.unlock())),i()},direction:function(t,e,i){var n,s=this.S("li",t),a=s.outerWidth()+s.outerWidth()/4,o=Math.floor(this.S(".clearing-container").outerWidth()/a)-1,r=s.index(i);return this.settings.up_count=o,n=this.adjacent(this.settings.prev_index,r)?r>o&&r>this.settings.prev_index?"right":r>o-1&&r<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=r,n},adjacent:function(t,e){for(var i=e+1;i>=e-1;i--)if(i===t)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(e).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document);