1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The primary difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll refers to their selection mechanism and return types.

getElementById : Selects a single element of DOM with a unique id.

getElementsByClassName : Selects all element that has same class name.

querySelector / querySelectorAll : Selects the first element or all element matching in CSS selector.

2. How do you create and insert a new element into the DOM?
   Ans: create a new element, give it content or attributes, and then insert it into the page so it becomes part of the DOM. First, create a new element and insert it by creating it with document.createElement(),setting its content and then adding it to the DOM using methods like appendChild() or insertBefore().

3. What is Event Bubbling and how does it work?
   Ans : Event bubbling is when an event starts on a specific element and then automatically moves up to its parent elements, triggering their event handlers along the way.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans : Event delegation is a technique in JavaScript where a parent element handles events for its child elements. When an event occurs, the handler on the parent can inspect the event.target property to identify which specific child element was originally clicked and take appropriate action.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault() stops the browser’s default action (like form submission), while stopPropagation() stops the event from moving up or down the DOM tree.
