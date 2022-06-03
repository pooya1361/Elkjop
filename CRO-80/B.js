document.addEventListener("PrebootComplete", function () {
    console.log("PrebootComplete");
    const userContainer = document.querySelector("button.icon-addon.icon-link.icon-link--1st.header__login-link.ng-star-inserted");
    const userIcon = userContainer.querySelector("mat-icon");
    const userText = userContainer.querySelector(".icon-link__label");
    
    userContainer.style.display = "flex";
    userContainer.style.flexDirection = "column";
    userContainer.style.justifyContent = "center";
    
    userIcon.style.height = "24px";
    userIcon.style.width = "24px";
    
    userText.style.display = "block";
    
    const storeFinder = document.querySelector(".common-header .header__storefinder-link");
    const storeFinderContainer = document.querySelector(".storefinder-link.icon-addon.icon-link.icon-link--1st");
    const storeFinderIcon = document.querySelector("mat-icon.mat-icon.notranslate.storefinder-link__icon.icon-link__icon.mat-icon-no-color");
    const storeFinderText = document.querySelector(".metanav .icon-addon__label.icon-link__label.storefinder-link__label.ng-star-inserted");
    
    storeFinder.style.display = "block";

    storeFinderContainer.style.display = "flex";
    storeFinderContainer.style.flexDirection = "column";
    storeFinderContainer.style.justifyContent = "center";

    storeFinderIcon.style.height = "24px";
    storeFinderIcon.style.width = "24px";
});