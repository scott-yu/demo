(function() {

    var ACTIVE_CLASS = 'active';

    var initPaginatedContentControl = function() {
        $('.x-paginated-content')
            .find('.x-index li').each(function(i, indexItem) {
                $('a', indexItem).click(function(e) {
                    e.preventDefault();

                    toggleIndexLinkActive($(indexItem))
                    toggleContentActive($(indexItem).index() + 1);
                })
            });
    }

    var toggleIndexLinkActive = function($el) {
        $el.addClass(ACTIVE_CLASS)
            .siblings()
            .removeClass(ACTIVE_CLASS);
    }

    var toggleContentActive = function(index) {
        $('.x-paginated-content .x-content article:nth-child(' + index + ')')
            .addClass(ACTIVE_CLASS)
            .siblings()
            .removeClass(ACTIVE_CLASS);
    }


    $(document).ready(function() {
        initPaginatedContentControl();
    });

}());
