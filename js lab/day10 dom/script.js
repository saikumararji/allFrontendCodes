/*Ques 1: Displaying a Welcome Message (document.getElementById(), textContent)
You have a simple webpage with an empty paragraph element that needs to display a welcome message
once the page loads. How would you use JavaScript to put "Welcome to our website!" inside that paragraph?
Description: This is the most fundamental DOM manipulation: selecting an element by its unique ID
using document.getElementById() and then setting its text content using the textContent property.
Steps:
1. Get the Element: Use document.getElementById() to get a reference to the <p> element by its id.
2. Set Text Content: Assign the desired string to the textContent property of the retrieved element.
Constraints:
 The target element must have a unique id.
 You are setting plain text, not HTML.
Note : The message will be displayed in the paragraph tag in HTML not in console.
*/
//                                    -----------------------------------------

// Ans:
/*
const msg = document.getElementById('welcome').textContent = "welcome to our website";
*/
// =============================================================================================================================

/*Ques 2: Changing Button Text on Click (addEventListener, id, textContent)
You have a button that says "Click Me". When a user clicks it, you want the button's text to change to
"Clicked!".
Description: This introduces event handling with addEventListener(). We'll select the button by its ID,
attach a click event listener, and inside the event handler function, modify the button's textContent.
Steps:
1. Get the Element: Get a reference to the button using its id.
2. Add Event Listener: Use addEventListener() to listen for a 'click' event.
3. Define Event Handler: Inside the callback function for the event, change the textContent of the
button to "Clicked!".
Constraints:
 The button must have an id.
 The text change should only happen on a click.
*/
//                        ------------------------------------------------------------

// Ans:

/*
const btn =document.getElementById('click').addEventListener("click",function(){
    this.textContent = "clicked!";
})
*/
// =====================================================================================================================

/*Ques 3: Changing Background Color (document.body, style.backgroundColor)
You want to add a feature where clicking a button changes the entire webpage's background color to a new
color (e.g., "lightblue").
Description: This demonstrates styling a fundamental part of the document: the <body> element. We'll
directly access document.body and modify its style.backgroundColor property.
Steps :
1. Get the Button: Get a reference to the "Change Background" button.
2. Add Event Listener: Attach a click event listener to the button.
3. Modify Body Style: Inside the event handler, access document.body and set its
style.backgroundColor property to the desired color string.
Constraints:
 The button must have an id.
 The color value must be a valid CSS color string.
*/
//                                      -------------------------------------------------------
// Ans:
/*
document.getElementById("btn").addEventListener("click", function() {
    document.body.style.backgroundColor = "pink";
});
*/
//=============================================================================================================================
/*Ques 4: Hiding and Showing an Image (style.display, style.visibility)
You have an image on your page. You want to create a toggle button that hides the image when clicked
once, and shows it again when clicked a second time.
Description: This demonstrates toggling an element's visibility using CSS display or visibility
properties via JavaScript. display: 'none' removes the element from the document flow, while
visibility: 'hidden' hides it but retains its space. We'll use display for a cleaner hide.
Steps :
1. Get Elements: Get references to the button and the image.
2. Add Event Listener: Attach a click event listener to the button.
3. Toggle Display: Inside the event handler, check the current display style of the image. If it's
'none', set it to 'block' (or '' to revert to default). If it's anything else, set it to 'none'.
Constraints:
 Both elements must have ids.
 The image should initially be visible.
*/
//                                          -----------------------------------
// Ans:
/*
document.getElementById("toggleBtn").addEventListener("click", function() {
    const img = document.getElementById("myImage");

    if (img.style.display === "none") {
        img.style.display = "block"; // or "" to revert to default
        this.textContent = "Hide Image";
    } else {
        img.style.display = "none";
        this.textContent = "Show Image";
    }
});
*/
// ==========================================================================================================================
/*Ques 5: Listing Items by Class Name (document.getElementsByClassName(), for...of loop,
textContent)
Scenario Question: You have multiple list items that share a common CSS class (e.g., "list-item"). You
want to iterate through all these items and print their text content to the console.
Explanation/Definition: This introduces selecting multiple elements by their class name using
document.getElementsByClassName(). This method returns an HTMLCollection (which is array-like but
not a true array). We'll then iterate over this collection using a for...of loop to access each element's
textContent.
Steps:
1. Get Elements by Class: Use document.getElementsByClassName() to get an HTMLCollection of
all elements with the specified class.
2. Iterate and Display: Loop through the HTMLCollection (e.g., using for...of) and for each
element, log its textContent.
Constraints:
 Elements must have the specified class.
 getElementsByClassName returns a live collection (changes if elements are added/removed from
DOM).*/
//                                 ----------------------------------------
// Ans:


