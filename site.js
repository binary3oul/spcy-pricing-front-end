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

    // Select all radios buttons in a group.
    var radios = document.getElementsByName('radioGroupName');

    // Loop through each radio button and uncheck it.
    for(var i = 0; i < radios.length; i++){ 
        radios[i].checked = false;
    }

    // var dataSrcElements = document.querySelectorAll('[data-src]')
    // dataSrcElements.forEach((item) => {
    //     console.log('src changes')
    //     item.setAttribute('src', item.getAttribute('data-src'))
    // })
});


setTimeout(() => {
    var dataSrcElements = document.querySelectorAll('[data-src]')
    dataSrcElements.forEach(item => {
        item.setAttribute('src', item.getAttribute('data-src'))
    })
    [
        'https://cdn.jsdelivr.net/npm/lightgallery@2.0.0/lightgallery.umd.js',
        'https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.js',
        'https://cdn.jsdelivr.net/npm/lightgallery@2.0.0/plugins/thumbnail/lg-thumbnail.umd.js',
        'https://cdn.jsdelivr.net/npm/lightgallery@2.0.0/plugins/zoom/lg-zoom.umd.js'
    ].forEach(link => {
        var script = document.createElement('script');
        script.src = link
        document.body.appendChild(script);
    })
}, 1)