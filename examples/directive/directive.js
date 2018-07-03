/**
 * (function)
 * 引用路径 '/assets/module/[[CloudModule]]/component/componentFolderName/componentFolderName.js',
 */
define([
    '/assets/cloud/ui/scrollbar/scrollbar.js',
    '/assets/cloud/ui/modal/modal.js',
    'css!/assets/module/[[CloudModule]]/component/componentFolderName/componentFolderName.css',
], function() {
    'use strict';

    // 创建modal
    cloudModule.compileProvider.directive('componentName', [
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
                        templateUrl: '/assets/module/[[CloudModule]]/component/componentFolderName/componentFolderName.html',
                        controller: 'componentClassName-controller',
                        windowClass: 'componentClassName-modal',
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
    cloudModule.controllerProvider.register('componentClassName-controller', [
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
            $scope.componentName = {
                close: function(result) {
                    $modalInstance.close(result);
                },
                submit: function() {

                }
            };
        }
    ]);

});