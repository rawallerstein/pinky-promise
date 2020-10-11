import { pinkyPromiseUtils as utils } from './utils'
/**
 * Class representing a better kind of Promise. A PinkyPromise.
 * @extends Promise
 */
export class PinkyPromise extends Promise {
	/**
	 * Create a PinkyPromise
	 * @param {Function|Promise|Object} [$param] -
	 */
	constructor($param) {
		const keepMap = {
			resolver: void 0,
			rejector: void 0,
			executor: void 0,
		}
		utils.init($param, keepMap)
		super(keepMap.executor)
		this.__resolve__ = keepMap.resolver
		this.__reject__ = keepMap.rejector
	}
}
