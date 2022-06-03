document.addEventListener("PrebootComplete", function () {
    console.log("PrebootComplete");

    const subscrElements = document.querySelectorAll(".subscription__container.ng-star-inserted")
    const target = Array.from(subscrElements).find(e => e.querySelector("elk-telecom-subscription"));
    target.click();
    
})    