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

    // 服务方式调用
    cloudModule.provide.service('componentNameService', [
        '$modal',
        function($modal) {
            return {
                open: function(data) {
                    var openParams = {
                        templateUrl: '/assets/module/[[CloudModule]]/component/componentFolderName/componentFolderName.html',
                        controller: 'componentClassName-controller',
                        windowClass: 'componentClassName-modal',
                        resolve: {
                            data: function() {
                                return {
                                    data: data
                                };
                            }
                        }
                    };
                    return $modal.open(openParams).result;
                }
            };
        }
    ]);

    // 指令方式调用
    cloudModule.compileProvider.directive('componentName', [
        'componentNameService',
        function(componentNameService) {
            return {
                strict: 'AE',
                scope: {
                    submit: '&',
                    data: '=?',
                },
                link: function(scope, element, attr) {
                    element.bind('click', open);

                    scope.$on('$destory', function() {
                        element.unbind('click');
                    });

                    function open() {
                        componentNameService.open(scope.data).then(function(res) {
                            if (res) {
                                scope.submit({
                                    result: res
                                });
                            }
                        });
                    }
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