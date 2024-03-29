/**
* @constructs HostGroup
*/
class HostGroup {
    constructor(req) {
        this.req = req
        this.mass = new Mass(req)
    }
    /**
    * The method allows to retrieve host groups according to the given parameters.
    *
    * @param {Object} params - Parameters defining the desired output.
    * @returns {Promise<array>} Retrieve all host groups generated.
    */
    get(params = []) {
        return this.req.jsonrpc('hostgroup.get', params)
            .then(data => data.result)
    }
    /**
    **
    * This method allows to create new host groups.
    *
    * @param {Object<array>} params - Host group to create.
    * @returns {Promise<array>} Returns an object containing the IDs of the created host groups.
    */
    create(params) {
        return this.req.jsonrpc('hostgroup.create', params)
            .then(data => data.result)
    }
    /**
    * This method allows to delete host groups.
    *
    * @param {Object<array>} params - IDs of the host groups to delete.
    * @returns {Promise<array>} Returns an object containing the IDs of the deleted host groups.
    */
    delete(params) {
        return this.req.jsonrpc('hostgroup.delete', params)
            .then(data => data.result)
    }
    /**
    * This method allows to update existing host groups.
    *
    * @param {Object<array>} params - Host group properties to be updated.
    * @returns {Promise<array>} Returns an object containing the IDs of the updated host groups.
    */
    update(params) {
        return this.req.jsonrpc('hostgroup.update', params)
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
* This method allows to simultaneously add multiple related objects to all the given host groups.
*
* @param {Object<array>} params - Parameters containing the IDs of the host groups to update and the objects to add to all the host groups.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host groups.
*/
Mass.prototype.add = function (params) {
	return this.req.jsonrpc('hostgroup.massadd', params)
		.then(data => data.result)
}


/**
* This method allows to remove related objects from multiple host groups.
*
* @param {Object<array>} params - This method allows to remove related objects from multiple host groups.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host groups.
*/
Mass.prototype.remove = function (params) {
	return this.req.jsonrpc('hostgroup.massremove', params)
		.then(data => data.result)
}


/**
* This method allows to simultaneously replace or remove related objects and update properties on multiple host groups.
*
* @param {Object<array>} params - Parameters containing the IDs of the host groups to update and the properties that should be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host groups.
*/
Mass.prototype.update = function (params) {
	return this.req.jsonrpc('hostgroup.massupdate', params)
		.then(data => data.result)
}



export default HostGroup