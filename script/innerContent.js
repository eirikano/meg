var blue_box_content = document.getElementById("content").children
function onclick_content(link) {
    var blue_box_inner = document.getElementById("blueBoxInner")
    for (i = 0; i < blue_box_inner.children.length; i++) {
        blue_box_inner.children[i].style.display = "none"
    }
    blue_box_inner.style.display = "flex"
    blue_box_inner.style.animation = "formFadeIn"
    blue_box_inner.style.animationDuration = "1s"
    blue_box_inner.style.transition = "1s"
    switch (link) {
        case "edu":
            var edu = document.getElementById("edu")
            edu.style.display = "block"
            break
        case "job":
            var job = document.getElementById("job")
            job.style.display = "block"
            break
        case "other":
            var other = document.getElementById("other")
            other.style.display = "block"
            break
        case "courses":
            var courses = document.getElementById("courses")
            courses.style.display = "block"
            break
        case "skills":
            var skills = document.getElementById("skills")
            skills.style.display = "block"
            break
    }


}


blue_box_content[0].addEventListener("click", function () { onclick_content("edu"); })
blue_box_content[1].addEventListener("click", function () { onclick_content("job"); })
blue_box_content[2].addEventListener("click", function () { onclick_content("other"); })
blue_box_content[3].addEventListener("click", function () { onclick_content("courses"); })
blue_box_content[4].addEventListener("click", function () { onclick_content("skills"); })