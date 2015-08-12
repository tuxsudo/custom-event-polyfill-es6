export default (function() {

	if(typeof window.CustomEvent!=="function") {

		function CustomEvent ( event, { bubbles = false, cancelable = false, detail = undefined } ) {
			var evt = document.createEvent( 'CustomEvent' );
			evt.initCustomEvent( event, bubbles, cancelable, detail );
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;

	}


})();
