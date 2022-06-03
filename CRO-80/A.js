document.addEventListener("PrebootComplete", function () {
    console.log("PrebootComplete");
    const storeFinder = document.querySelector(".common-header .header__storefinder-link");
    const storeFinderText = document.querySelector(".metanav .icon-addon__label.icon-link__label.storefinder-link__label.ng-star-inserted");

    storeFinder.style.display = "block";
    storeFinderText.style.display = "none";
});