/* 
	TODO PromiseRing class. A Map or Set of Promises. Promises can be retrieved by fulfillment state
	TODO 	Promises can be bulk fulfilled, added and removed from the PromiseRing
	TODO 	Promises can be interrupted, debounced, throttled, and reset based on Promise fulfillment, rather than timeout
	TODO    Use case: Switching filters makes a backend request and sets data, but if we switch filters too fast, the callbacks conflict.
	TODO		PromiseRing allows you to debounce, throttle, or interrupt the previous Promise and use the new Promise instead
*/
