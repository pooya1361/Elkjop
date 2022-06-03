document.addEventListener("PrebootComplete", function () {
    console.log("PrebootComplete");

    const storeFinderContainer = document.querySelector(".metanav elk-storefinder-link.header__storefinder-link");
    const storeFinderAnchor = storeFinderContainer.querySelector("a");
    const searchProduct = document.querySelector("form.search-product.ng-untouched.ng-pristine.ng-invalid");

    storeFinderContainer.style.display = "flex";
    storeFinderContainer.style.marginTop = "0.5rem";    
    storeFinderAnchor.style.padding = "0px";
    
    searchProduct.append(storeFinderContainer);
})
