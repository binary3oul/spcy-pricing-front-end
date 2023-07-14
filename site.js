function openTabPage(n, t) {
    for (var r, u = document.getElementsByClassName("tabcontent"), i = 0; i < u.length; i++)
        u[i].style.display = "none";

    for (r = document.getElementsByClassName("tablinks"), i = 0; i < r.length; i++)
        r[i].className = r[i].className.replace(" active", "");

    document.getElementById(t).style.display = "block";
    n.currentTarget.className += " active"
}

const selectRadios = document.getElementsByName("select")

selectRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        openTabPage(e, e.target.value)
    })
})

document.getElementById("defaultTabPage").dispatchEvent(new Event('change'));

window.addEventListener('DOMContentLoaded', function() {
    // Code you want to execute after the DOM has been mounted
    if(window.innerWidth < 768){
        const iconsCount = document.querySelectorAll(".icons .text-cyan").length
        if(iconsCount > 4) {
            document.querySelector("h2.name").style.setProperty('padding-bottom', '8px', 'important')
            document.querySelector(".banner").style.paddingTop = "64px"
            document.querySelector(".icons").style.marginTop = "24px"
        }
    }

    jQuery(".gallery-container")
    .justifiedGallery({
        captions: false,
        rowHeight: 360, // This number determines how big the thumbnails will be and how many thumbnails will be shown in a row.
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
                licenseKey: '08D8C119-0098-4FDC-94A8-58BE235087BC',
                download: false,
                mobileSettings: {
                    controls: true,
                    showCloseIcon: true,
                    download: false,
                    rotate: true
                }
            });
    });

    

});

$(window).on('load', () => {
    $('.loading-wrapper').fadeOut(500)
    
    $('main').fadeIn(1000)
    $('header').fadeIn(1000)
})