# Meetrics Code Challenge

## Implementation Comments:
1) calculated viewability % for vertical & horizontal scroll.
2) calculated time in seconds if ad is visible more than 50%.
3) handled tab change event to log the status as well as start/stop timer of add visibility.
4) tracked user's current tab focus to check user is active on page or not.
5) counted user's click on whole document (can be restricted to particular ad level).
6) kept same logging function with few other advertise statistics added.

## Future improvements:
1) currently % portion of advertise calculated for downward scroll, need to handle upward scroll as well if advertise get hidden at below of webpage
2) currently if combination of horizontal & vertical scroll produces less perfect percentage of portion visibility, but considering responsiveness standard there will be less possibility of horizontal scroll




## The ad being viewable means:

- The advertisement is 100% in the viewport of the browser (not viewable would be if the user scrolls to the bottom of
 the
 page)
- The browser tab is opened (not viewable would be if you open some other page, e.g. facebook.com in another tab and
the page looses its focus)

## Goal:
- Measure the viewability of the DIV that contains the ad
- Determine viewability also by evaluating the windows focus state (tab change, window unfocused)
- Log your results either to the console or render it on the page

## Requirements:
- You can use pure JavaScript or any library or a framework of your choice
- Feel free to override the `window.log` function.
  This function is invoked every **500ms** and should perform a simple `console.log` with your current viewability values.
- Feel free to override the whole `script.js` if needed
- Feel free to override the `printStatus` function - if you feel that you would like to display data in some other way
that just logs in the console - you're more than welcome to do it!
- The HTML structure of `index.html` file shouldn't be changed
- Browser support at least one browser of your choice

## Nice extras to have:
- Measure the portion of the ad that is visible in %
- Track clicks

## Hints:

- We recommend you to have a look at the PageVisibility API of browsers or focus events
- An example can be found on our homepage https://www.meetrics.com/live-demo/

## We value:

- Clean, maintainable, well-documented code
- Quality assurance of the code

## Delivery:
  Put your code in a git repository of your choice and send us the link.

## Full Visibility
<img width="1098" alt="image" src="https://user-images.githubusercontent.com/41572852/137600234-7f0c154f-7ea4-4145-b384-510f2136bded.png">

## Partial Visibility 
<img width="1098" alt="image" src="https://user-images.githubusercontent.com/41572852/137600257-06d01414-19cf-4b7a-b355-6087ac06f7fc.png">

## Horizontal partial Visibility 
<img width="1098" alt="image" src="https://user-images.githubusercontent.com/41572852/137600322-85a82043-671b-4894-859e-01be9be95baa.png">

