(function () {
    var app = angular.module('jqDirective', []);

    app.directive('uiDraggable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.draggable({
                    revert: false
                });
            }
        };
    });

    app.directive('uiDroppable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.droppable({
                    drop: function (event, ui) {
                    }
                });
            }
        };
    });

    app.directive('uiSelectable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.selectable();
            }
        };
    });

    app.directive('uiSortable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.sortable();
                el.disableSelection();
            }
        };
    });

    app.directive('uiResizable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.resizable();
            }
        };
    });
})();