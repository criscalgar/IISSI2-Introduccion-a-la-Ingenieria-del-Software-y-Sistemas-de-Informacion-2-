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

const municipiosAPI_auto = {

    /**
    * Gets all municipios
    */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/municipios`,requestOptions);
        return response.data;
    },

    /**
    * Gets an entry from 'municipios' by its primary key
    */
    getById: async function(municipioId) {
        let response = await axios.get(`${BASE_URL}/municipios/${municipioId}`,requestOptions);
        return response.data[0];
    },

    /**
    * Creates a new entry in 'municipios'
    */
    create: async function(formData, ) {
        let response = await axios.post(`${BASE_URL}/municipios`,formData, requestOptions);
        return response.data;
    },

    /**
    * Updates an existing entry in 'municipios' by its primary key
    */
    update: async function(formData, municipioId) {
        let response = await axios.put(`${BASE_URL}/municipios/${municipioId}`,formData, requestOptions);
        return response.data;
    },

    /**
    * Deletes an existing entry in 'municipios' by its primary key
    */
    delete: async function(municipioId) {
        let response = await axios.delete(`${BASE_URL}/municipios/${municipioId}`,requestOptions);
        return response.data;
    },
};

export {municipiosAPI_auto};