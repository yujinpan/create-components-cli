/**
 * (function)
 * 引用路径 '/assets/module/[[CloudModule]]/component/cloud_module/cloud_module.js',
 */
define([
    '/assets/cloud/ui/scrollbar/scrollbar.js',
    '/assets/cloud/ui/modal/modal.js',
    'css!/assets/module/[[CloudModule]]/component/cloud_module/cloud_module.css',
], function() {
    'use strict';

    // 创建modal
    cloudModule.compileProvider.directive('cloudModule', [
        '$modal',
        function($modal) {
            return {
                strict: 'AE',
                scope: {
                    submit: '&',
                    data: '=?',
                },
                link: function(scope, element, attr) {
                    var openParams = {
                        templateUrl: '/assets/module/[[CloudModule]]/component/cloud_module/cloud_module.html',
                        controller: 'cloud-module-controller',
                        windowClass: 'cloud-module-modal',
                        resolve: {
                            data: function() {
                                return {
                                    data: scope.data
                                };
                            }
                        }
                    };

                    element.on('click', function() {
                        $modal.open(openParams).result.then(function(res) {
                            if (res) {
                                scope.submit({
                                    result: res
                                });
                            }
                        });
                    });
                }
            };
        }
    ]);

    // modal的控制器
    cloudModule.controllerProvider.register('cloud-module-controller', [
        '$scope', '$modalInstance', '$http', 'Modal', 'data',
        function($scope, $modalInstance, $http, Modal, data) {

            var URL = {

            };

            $scope.loading = false;

            /**
             * 主逻辑
             * 
             * @function close 关闭模态框
             * @function submit 提交表单
             */
            $scope.cloudModule = {
                close: function(result) {
                    $modalInstance.close(result);
                },
                submit: function() {

                }
            };
        }
    ]);

});