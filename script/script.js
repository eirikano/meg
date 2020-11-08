

var link_box = document.getElementsByClassName("linkBox")
var portrait_img = document.getElementById("portraitImg")
var portrait_box = document.getElementById("portraitBox")

function portrait(event) {

    if (event == "enter") {
        portrait_img.setAttribute('src', "img/portrait_color.jpg")
    }
    else if (event == "leave") {
        portrait_img.setAttribute('src', "img/portrait.jpg")
    }

}


portrait_img.addEventListener("mouseenter", function () { portrait("enter"); })
portrait_img.addEventListener("mouseleave", function () { portrait("leave"); })


var blue_box = document.getElementById("blueBox")
var blue_box_inner = document.getElementById("blueBoxInner")
function onclick_form(form_type) {
    // var body_element = document.getElementsByTagName("body")[0]
    if (form_type == "CV") {
        blue_box.style.display = "flex"
        blue_box.style.animation = "formFadeIn"
        blue_box.style.animationDuration = "1s"
        blue_box.style.transition = "1s"
    }
    else if (form_type == "Front") {
        blue_box.style.animation = "formFadeOut"
        blue_box.style.animationDuration = "1s"
        blue_box.style.transition = "1s"

        blue_box_inner.style.animation = "formFadeOut"
        blue_box_inner.style.animationDuration = "1s"
        blue_box_inner.style.transition = "1s"

        setTimeout(function () {
            blue_box.style.display = "none"
            blue_box_inner.style.display = "none"
        }, 950);
    }

    blue_box.style.transition = "0s"
    blue_box_inner.style.transition = "0s"
}


link_box[0].addEventListener("click", function () { onclick_form("Front"); })
link_box[1].addEventListener("click", function () { onclick_form("CV"); })
// link_box[2].addEventListener("click", function () { onclick_form("Other"); })