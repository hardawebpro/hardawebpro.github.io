jQuery(document).ready(function () {
    console.log('jQuery is ready');

    function toggleMenu() {
        jQuery('.bars').on('click', function () {
            jQuery('#header-menu-nav').toggleClass('active');

            jQuery('#header-overlay').toggleClass('active');

            jQuery('.closer').on('click', function () {
                jQuery('#header-menu-nav').removeClass('active');
                jQuery('#header-overlay').removeClass('active');
            });




        });
    }
    toggleMenu();




});
