/**
 * (function)
 * 
 * 引用路径'/assets/module/[[CloudModule]]/factory/componentName.js'
 */
define([
    // 依赖
], function() {
    'use strict';
    cloudModule.provide.factory('componentName', [
        '$http',
        function($http) {
            return {
                fn: function() {
                    // fn
                }
            };
        }
    ]);
});