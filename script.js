/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
 let tick = false,
 lastKnownScrollPosition = 0,
 isHorizontalScroll = false,
 timer;
const adStats = {
 percentage: 100,
 viewTime: 0,
 active: false,
 visible: "visible",
 clicks: 0,
};
const adElement = document.getElementById("ad");

/**
* Logs the viewability values in the console
*
* @override
*/
window.log = function () {
 console.log(
   `Percentage of Ad visibility on screen: ${adStats.percentage}%
   \nViewability time of the ad in sec: ${adStats.viewTime}s
   \nIs user active: ${adStats.active}
   \nBrowser tab is : ${adStats.visible}
   \nUser clicks : ${adStats.clicks}
   `
 );
};

/************************************************************************************************
*                                                                                              *
*                              YOUR IMPLEMENTATION                                             *
*                                                                                              *
************************************************************************************************/

/**
* method to trigger all necessary events on dom load
*/
const handleOnLoad = () => {
 handleVisibilityChange();
 handleScroll();
 handleResize();
 handleFocus();
 isElementInViewport();
};

/**
* trigger recalculation of visibility on resize
*/
const handleResize = () => {
 isElementInViewport();
 handleScroll();
};

/**
* check if browser tab is visible or not
*/
const handleVisibilityChange = (event) => {
 window.addEventListener(blur, handleFocus, false);
 if (document.visibilityState === "hidden") {
   adStats.visible = "hidden";
   adStats.active = false;
   stopTimer();
 } else {
   adStats.visible = "visible";
   startTimer();
 }
};

/**
* check if advertisement in visible in view port
*/
const isElementInViewport = () => {
 
 const { x, y, width, height } = adElement.getBoundingClientRect();

 let percentage = 100;
 let movement = y;
 let movementFrom = height;

 if (isHorizontalScroll) {
   movementFrom = width;
   movement = x;
 }

 if (movement < 0) {
   if (Math.abs(movement) <= movementFrom) {
     percentage = calculateVisibility(movement, movementFrom);
   } else {
     percentage = 0;
   }
 }

 if (percentage > 50) {
   startTimer();
 } else {
   stopTimer();
 }
 adStats.percentage = percentage;
};

/**
* to handle scroll event & to identify scroll type (horizontal / vertical)
*/
const handleScroll = (event) => {
 if (!tick) {
   window.requestAnimationFrame(function () {
     documentScrollLeft = window.scrollX;
     if (lastKnownScrollPosition != documentScrollLeft) {
       isHorizontalScroll = true;
       lastKnownScrollPosition = documentScrollLeft;
     }
     tick = false;
     isElementInViewport();
   });
   isHorizontalScroll = false;
   tick = true;
 }
};

/**
* Calculate visibility percentage
*/
const calculateVisibility = (movement, movementFrom) => {
 const hiddenPortion = Math.abs(movementFrom - Math.abs(movement));
 return Math.ceil((hiddenPortion / movementFrom) * 100);
};

/**
* Handle blur event & click event of window
*/
const handleFocus = (e) => {
 adStats.active = document.hasFocus();
 if (e && e.type == "click") {
   adStats.clicks = adStats.clicks + 1;
 }
};

/**
* start & stop method for timer to calculate active time with advertisement
*/
const startTimer = () => {
 if (!timer && adStats.percentage > 50) {
   timer = setInterval(() => {
     adStats.viewTime = adStats.viewTime + 1;
   }, 1000);
 }
};

const stopTimer = () => {
 clearInterval(timer);
 timer = null;
};

/**
* Attach functions to event listeners
*/
const events = {
 scroll: handleScroll,
 visibilitychange: handleVisibilityChange,
 load: handleOnLoad,
 DOMContentLoaded: handleOnLoad,
 resize: handleResize,
 click: handleFocus,
 blur: handleFocus,
};
for (const [key, value] of Object.entries(events)) {
 window.addEventListener(key, value, false);
}
