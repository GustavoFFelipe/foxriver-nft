
// Event to back to top button
/*Javascript pure mode
let btn = document.querySelector("#btn-footer");

btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});*/

let btn = $("#btn-footer");

btn.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

})

