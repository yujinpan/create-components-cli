/**
 * (function)
 * 
 * 引用路径'/assets/module/[[CloudModule]]/provider/componentName.js'
 */
define([
    // 依赖
], function() {
    'use strict';

    // provider
    cloudModule.provider.provider('componentName', [
        '$http',
        function($http) {
            var id = 0;
            return {
                setId: function(id) {
                    id = id;
                },
                $get: function() {
                    var name = 'provider';
                    return {
                        name: name,
                        fn: function() {
                            // fn
                        },
                        getId: function() {
                            return id;
                        }
                    };
                }
            };
        }
    ]);

    // 下面是实例
    // config: set id
    cloudModule.config(function(componentName) {
        componentName.setId(1);
    });

    // controller: get id
    cloudModule.register.controller(function(componentName) {
        componentName.getId();
    });
});