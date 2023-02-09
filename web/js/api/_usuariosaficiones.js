/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const usuariosaficionesAPI_auto = {

    /**
    * Gets all usuariosaficiones
    */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/usuariosaficiones`,requestOptions);
        return response.data;
    },

    /**
    * Gets an entry from 'usuariosaficiones' by its primary key
    */
    getById: async function(usuarioAficionId) {
        let response = await axios.get(`${BASE_URL}/usuariosaficiones/${usuarioAficionId}`,requestOptions);
        return response.data[0];
    },

    /**
    * Creates a new entry in 'usuariosaficiones'
    */
    create: async function(formData, ) {
        let response = await axios.post(`${BASE_URL}/usuariosaficiones`,formData, requestOptions);
        return response.data;
    },

    /**
    * Updates an existing entry in 'usuariosaficiones' by its primary key
    */
    update: async function(formData, usuarioAficionId) {
        let response = await axios.put(`${BASE_URL}/usuariosaficiones/${usuarioAficionId}`,formData, requestOptions);
        return response.data;
    },

    /**
    * Deletes an existing entry in 'usuariosaficiones' by its primary key
    */
    delete: async function(usuarioAficionId) {
        let response = await axios.delete(`${BASE_URL}/usuariosaficiones/${usuarioAficionId}`,requestOptions);
        return response.data;
    },
};

export {usuariosaficionesAPI_auto};