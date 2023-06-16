$('#collapseEx a').click(function (e) {
    $('#collapseEx').collapse('hide');
});

/* WOW.js init */
new WOW().init();

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

jQuery("#animated-thumbnails-gallery-overview, #animated-thumbnails-gallery-events, #animated-thumbnails-gallery-wedding, #animated-thumbnails-gallery-landscapes, #animated-thumbnails-gallery-backgrounds")
    .justifiedGallery({
        captions: false,
        rowHeight: 180,
        margins: 6
    })
    .on("jg.complete", function () {
        window.lightGallery(
        this,
        {
            autoplayFirstVideo: false,
            pager: false,
            galleryId: "nature",
            plugins: [lgZoom, lgThumbnail],
            mobileSettings: {
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false
            }
        }
        );
    });