/**
 * (function)
 * 
 * 引用路径'/assets/module/[CloudModule]/service/[componentNameService].js'
 */
define([
    // 依赖
], function() {
    'use strict';
    cloudModule.provide.service('[componentNameService]', [
        '$http',
        function($http) {
            this.fn = function() {
                // fn
            };
        }
    ]);
});