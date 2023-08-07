$(document).ready(function() {
    $.ajaxSetup({
		headers: {
            'Access-Control-Allow-Origin': '*'
		}
	});

    $.ajax({
		url: "https://spicyvision.com/QuoteService/ListOfServices",
		method: "GET",
		dataType: "json",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
		success: function (data) {
		  console.log(data);
      const response = [
        {
            "Id": 1,
            "ServiceName": "Photo with edit",
            "SortOrder": 1,
            "Price": 95,
            "IsMandatory": false,
            "IsHourlyPrice": true,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "<p>With Nikon Z9, Z6ii, Z7ii, and a collection of Native Nikon Pro graded lenses, complemented by a full range of essential Lighting and Softboxes, ensuring that every shot is captured with the utmost precision and creativity. Our commitment to perfection extends to the post-processing stage, where each image will be meticulously edited by hand, free from any generic templates or presets.</p><p>We firmly believe that every photograph carries its own unique narrative and mood, and it is our mission to honor and enhance that story through our craft. Rest assured, your visuals will receive the individual attention they deserve, allowing them to shine in their full glory.</p>",
            "MutuallyExclusiveGroupName": "photo"
        },
        {
            "Id": 2,
            "ServiceName": "Photo without edit (as a second shooter)",
            "SortOrder": 2,
            "Price": 55,
            "IsMandatory": false,
            "IsHourlyPrice": true,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "",
            "MutuallyExclusiveGroupName": "photo"
        },
        {
            "Id": 3,
            "ServiceName": "Video with post production",
            "SortOrder": 3,
            "Price": 185,
            "IsMandatory": false,
            "IsHourlyPrice": true,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "<p>Equipped with an impressive array of cutting-edge gear, our arsenal includes three top-of-the-line professional video cameras, namely the Nikon Z9, Z6ii, and Z7ii. To ensure pristine audio quality, I rely on two high-performance 32-bit audio recorders, the Zoom F6, complimented the exceptional AT4025 Field Recorder Mic.</p>\n<p>\nFor unparalleled stability and fluidity in motion shots, I employ the reliable Ronin DJI RS3 Pro Stabilizer. And when it comes to lenses, I exclusively use the finest Nikon Z Native Pro graded lenses, ensuring unmatched clarity and visual brilliance.</p>\n<p>\nTo masterfully illuminate each scene, I harness the power of Godox ML-60 Bicolor lights, enhancing the ambiance and highlighting the subject's best features. When required, my Softboxes step in, offering gentle and diffused lighting for the perfect mood.</p>\n<p>\nRest assured, every piece of equipment in my kit has been carefully chosen to deliver nothing less than outstanding results for your project.</p>",
            "MutuallyExclusiveGroupName": "video"
        },
        {
            "Id": 5,
            "ServiceName": "Video without post-production (as a second shooter)",
            "SortOrder": 4,
            "Price": 95,
            "IsMandatory": false,
            "IsHourlyPrice": true,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "<p>With a versatile setup that includes 3 camera angles and 3 audio recording sources, I offer a wide range of video formats to suit your specific needs. Capture the finest details with options like Nikon 12 Bit N Raw, 12 Bit ProRes RAW, or 10 Bit Nikon N-Log with ProRes HQ. Alternatively, opt for the efficiency of 10 Bit H265 NLog or SDR, or the simplicity of 8bit SDR.</p>\n<p>\nWhen it comes to audio, rest assured that I employ 3 independently recorded sources, all utilizing 32-bit recorders – two Zoom F6 and one Tentacle Track E. This ensures pristine sound quality that perfectly complements your visuals.\n</p><p>\nFor seamless post-production workflows, all my videos come equipped with Tentacle Sync TimeCode. Easily synchronize them in popular editing software such as Davinci Resolve, Premiere Pro, or any other NLE software.</p>\n<p>\nChoose from a variety of resolutions and frame rates, including 8K 60fps, 4K 60fps, or even 120fps, allowing you to tailor the output to your project's requirements. The possibilities are limitless, and I am dedicated to delivering the highest quality results for your vision.</p>",
            "MutuallyExclusiveGroupName": "video"
        },
        {
            "Id": 7,
            "ServiceName": "Location Change",
            "SortOrder": 5,
            "Price": 75,
            "IsMandatory": false,
            "IsHourlyPrice": false,
            "IsSelectable": false,
            "IsLocationChangeService": true,
            "ServiceDescription": "This fee applies if you want me to shoot multiple locations on the same day. Say, if you have two locations to shoot on the same day, then, there will be one location change. If you have 3 locations to shoot on the same day, then there will be 2 locations changed.",
            "MutuallyExclusiveGroupName": ""
        },
        {
            "Id": 8,
            "ServiceName": "Online Delivery of Files",
            "SortOrder": 6,
            "Price": 0,
            "IsMandatory": false,
            "IsHourlyPrice": false,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "I will provide you a secured online download link of my cloud server so that you can download the files within a 30-day retention period",
            "MutuallyExclusiveGroupName": ""
        },
        {
            "Id": 9,
            "ServiceName": "Physical delivery of USB Flash Drive, to house",
            "SortOrder": 7,
            "Price": 60,
            "IsMandatory": false,
            "IsHourlyPrice": false,
            "IsSelectable": true,
            "IsLocationChangeService": false,
            "ServiceDescription": "I will drive to your house (if within GTA) or mail the USB Flash Drive to your home",
            "MutuallyExclusiveGroupName": ""
        },
        {
            "Id": 6,
            "ServiceName": "Set up fee",
            "SortOrder": 8,
            "Price": 95,
            "IsMandatory": true,
            "IsHourlyPrice": false,
            "IsSelectable": false,
            "IsLocationChangeService": false,
            "ServiceDescription": "This is a one-time setup fee for any service you choose.",
            "MutuallyExclusiveGroupName": ""
        }
      ]
      console.log(response)
		},
		error: function (xhr, status, error) {
		  console.log(xhr.responseText);
		},
	});

    $('a.btn').on('click', function(event) {
        event.preventDefault();
        let checked = $(this).next('input[type=checkbox]').prop('checked')
        $(this).next('input[type=checkbox]').prop('checked', !checked);

        let pricingDiv = $(this).closest('.pricing-table');
        pricingDiv.toggleClass('active', checked);
    });

    $('.btn-request-quote').click(function() {
        $(this).fadeOut()
        $('#generate-quote-form').fadeIn()
    })
});