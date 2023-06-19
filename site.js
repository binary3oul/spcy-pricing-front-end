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

// https://codepen.io/sachinchoolur/pen/poebzpV
/* lightGallery configuration */
jQuery("#animated-thumbnails-gallery-overview, #animated-thumbnails-gallery-events, #animated-thumbnails-gallery-wedding, #animated-thumbnails-gallery-landscapes, #animated-thumbnails-gallery-backgrounds")
    .justifiedGallery({
        captions: false,
        rowHeight: 180,     // set Row Height
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
                    controls: true,
                    showCloseIcon: true,
                    download: true,
                    rotate: true
                }
            });
    });