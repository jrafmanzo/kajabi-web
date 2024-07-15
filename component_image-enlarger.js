$(document).ready(function() {
    // Add click event listener to all images inside the element with ID #rich-text
    $('#rich-text img').on('click', function() {
        // Get the source of the clicked image
        let imgSrc = $(this).attr('src');

        // Create a modal if it doesn't already exist
        if ($('#enlarge-modal').length === 0) {
            $('body').append(`
                <div id="enlarge-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); justify-content:center; align-items:center; display:flex;">
                    <img id="enlarged-image" src="" style="max-width:70vw; max-height:60vh; width:auto; height:auto; margin:auto;">
                </div>
            `);

            // Close the modal when clicking outside the image
            $('#enlarge-modal').on('click', function(e) {
                if ($(e.target).is('#enlarged-image')) return;
                $(this).fadeOut();
            });
        }

        // Set the source of the enlarged image and show the modal
        $('#enlarged-image').attr('src', imgSrc);
        $('#enlarge-modal').fadeIn();
    });
});
