$(function () {

	MainAction.EventInit();
});

var MainAction = {
	EventInit : function () {
		MainAction.TabEvent();
	},
	TabEvent : function() {
		$(".tab").find("button").on("click", function(){
			$(".tabcont, .tab button").removeClass("on");
			$("#" + $(this).attr("data-tabshow")).addClass("on");	
			$(this).addClass("on");
		});
	}
}