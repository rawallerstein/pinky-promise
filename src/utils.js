/**
 * Set keepers (resolve(), reject(), promise executor) for our internal promise
 * 	After setting the keepers, we need to actually execute the vanilla executor
 * @param {Object} keepMap - Map of keepers so we can smuggle keepers past the constructor
 * @param {Function} $paramExecutor - Promise executor function derived from $param
 */
function setKeepers(keepMap, $paramExecutor) {
	$paramExecutor = $paramExecutor || ((r) => r())
	keepMap.executor = (res, rej) => {
		keepMap.resolver = res
		keepMap.rejector = rej
		$paramExecutor(res, rej)
	}
}
/**
 *
 * @param {*} $param
 * @param {*} keepMap
 */
function init($param, keepMap) {
	if ($param instanceof Promise) {
		return setKeepers(keepMap, function (res, rej) {
			$param.then(
				(onRes) => res(onRes),
				(onRej) => rej(onRej)
			)
		})
	}
	if ($param instanceof Function) {
		return setKeepers(keepMap, $param)
	}
	if ($param instanceof Object) {
		return setKeepers(keepMap, $param.executor)
	}
	setKeepers(keepMap)
}

export const pinkyPromiseUtils = {
	setKeepers,
	init,
}

export default {
	pinkyPromiseUtils,
}
