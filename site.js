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