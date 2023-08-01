(function($) {
    $(document).ready(function() {
        const modal = {
            items: {
                src: '#present-modal',
                preloader: false,
                type: 'inline',
                midClick: true,
            },
            callbacks: {
                open: function() {
                    $('.circle-small').removeClass('show');
                },
                close: function() {
                    $('.circle-small').addClass('show');
                }
            }
        };
        $('.circle-small').magnificPopup(modal);

        setTimeout(function() {
            $.magnificPopup.open(modal);
        }, 3500);

        $('.mfp-content,.present-modal,.circle__close').on('click', function(event) {
            event.preventDefault();
            $.magnificPopup.close();
        });
        $(document).on('click', '.popup-modal-dismiss', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
}
)(jQuery);
