'use strict';

angular.module('ngFrench')
.service('FrenchService', function() {
    return {
        saysSomethingFrench : function () {
            console.log("et voila!!!!")
        }
    }
});