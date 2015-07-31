(function() {

    var ACTIVE_CLASS = 'active';

    var initPaginatedContentControl = function($container) {
        $container
            .find('.x-index li').each(function(i, indexItem) {
                $('a', indexItem).click(function(e) {
                    e.preventDefault();

                    toggleIndexLinkActive($(indexItem))
                    toggleContentActive($container, $(indexItem).index() + 1);
                })
            });
    }

    var toggleIndexLinkActive = function($el) {
        $el.addClass(ACTIVE_CLASS)
            .siblings()
            .removeClass(ACTIVE_CLASS);
    }

    var toggleContentActive = function($container, index) {
        $container.find('.x-content article:nth-child(' + index + ')')
            .addClass(ACTIVE_CLASS)
            .siblings()
            .removeClass(ACTIVE_CLASS);
    }


    $(document).ready(function() {
        initPaginatedContentControl($('.x-paginated-content'));
    });

}());
