function _change_nav_link(_this){

    let _tab_array = document.getElementsByClassName("nav-link");

    for (let index = 0; index < _tab_array.length; index++) {
        _tab_array[index].classList.remove("active")
    }

    _this.classList.add("active");
}
