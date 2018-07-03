/**
 * (function)
 * 
 * 引用路径'/assets/module/[[CloudModule]]/service/componentName.js'
 */
define([
    // 依赖
], function() {
    'use strict';
    cloudModule.provide.service('componentName', [
        '$http',
        function($http) {
            this.fn = function() {
                // fn
            };
        }
    ]);
});