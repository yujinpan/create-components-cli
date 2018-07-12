/**
 * (function)
 * 
 * 引用路径'/assets/module/[CloudModule]/factory/[componentNameService].js'
 */
define([
    // 依赖
], function() {
    'use strict';
    cloudModule.provide.factory('[componentNameService]', [
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