/**
* @constructs HostInterface
*/
class HostInterface {
    constructor(req) {
        this.req = req
        this.mass = new Mass(req)
    }
    /**
    * The method allows to retrieve host interfaces according to the given parameters.
    *
    * @param {Object} params - Parameters defining the desired output.
    * @returns {Promise<array>} Retrieve all host interfaces generated.
    */
    get(params = []) {
        return this.req.jsonrpc('hostinterface.get', params)
            .then(data => data.result)
    }
    /**
    **
    * This method allows to create new host interface.
    *
    * @param {Object<array>} params - Host interfaces to create.
    * @returns {Promise<array>} Returns an object containing the IDs of the created host interfaces.
    */
    create(params) {
        return this.req.jsonrpc('hostinterface.create', params)
            .then(data => data.result)
    }
    /**
    * This method allows to delete host interfaces.
    *
    * @param {Object<array>} params - IDs of the host interfaces to delete.
    * @returns {Promise<array>} Returns an object containing the IDs of the deleted host interfaces.
    */
    delete(params) {
        return this.req.jsonrpc('hostinterface.delete', params)
            .then(data => data.result)
    }
    /**
    * This method allows to update existing host interface.
    *
    * @param {Object<array>} params - Host interface properties to be updated.
    * @returns {Promise<array>} Returns an object containing the IDs of the updated host interfaces.
    */
    update(params) {
        return this.req.jsonrpc('hostinterface.update', params)
            .then(data => data.result)
    }
    /**
    * This method allows to replace all host interfaces on a given host.
    *
    * @param {Object<array>} params - Parameters containing the ID of the host to be updated and the new host interfaces.
    * @returns {Promise<array>} Returns an object containing the IDs of the created host interfaces.
    */
    replacehostinterfaces(params) {
        return this.req.jsonrpc('hostinterface.replacehostinterfaces', params)
            .then(data => data.result)
    }
    /**
    * This method allows to replace all host interfaces on a given host.
    *
    * @param {Object<array>} params - Parameters containing the ID of the host to be updated and the new host interfaces.
    * @returns {Promise<array>} Returns an object containing the IDs of the created host interfaces.
    */
    replace(params) {
        return this.req.jsonrpc('hostinterface.replacehostinterfaces', params)
            .then(data => data.result)
    }
}














/**
* @constructs Mass
*/
const Mass = function(req) {
	this.req = req
}


/**
* This method allows to simultaneously add multiple related objects to all the given host interfaces.
*
* @param {Object<array>} params - Parameters containing the IDs of the hosts to update and the objects to add to all the host interfaces.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host interfaces.
*/
Mass.prototype.add = function (params) {
	return this.req.jsonrpc('hostinterface.massadd', params)
		.then(data => data.result)
}


/**
* This method allows to remove related objects from multiple host interfaces.
*
* @param {Object<array>} params - This method allows to remove related objects from multiple host interfaces.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host interfaces.
*/
Mass.prototype.remove = function (params) {
	return this.req.jsonrpc('hostinterface.massremove', params)
		.then(data => data.result)
}


export default HostInterface