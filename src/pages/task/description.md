# Short description

The basket skeleton is prepared. When a new order item is added to the basket, a notification box is displayed to inform the user that the order has been placed.

<img src="assets/basket-center.png" width="50%" alt="centered basket">

## What is wrong ?

The notification box position is not flexible. On mobile devices, it looks like this:

<img src="assets/notification-mobile.png" width="50%" alt="centered basket">

if the basket component is placed on the left side of the screen:

<img src="assets/basket-left.png" width="50%" alt="basket left">

if the basket component is placed on the right side of the screen:

<img src="assets/basket-right.png" width="50%" alt="basket left">

In all these cases, the notification box is not fully visible.

## Goal

Make the notification box display flexible. Regardless of where the basket is placed on the screen, the notification box should always be displayed correctly.

If the basket is placed on the left side of the screen, the notification box should appear on the right side of the basket icon:

<img src="assets/basket-left-correct.png" width="50%" alt="basket left">

If the basket is placed on the right side of the screen, the notification box should appear on the left side of the basket icon:

<img src="assets/basket-right-correct.png" width="50%" alt="basket left">

On mobile devices (using a breakpoint of 480px), the notification box should behave differently. It should stretch across the entire screen, like this:

<img src="assets/basket-mobile-correct.png" width="50%" alt="basket left">

## Key points

- the basket can be placed anywhere on the screen
- the screen may include scroll bars
- the notification box should be responsive and work on all types of screens
- all existing source code can be modified or restructured if necessary
- clean code is an important factor; keep SOLID principles in mind
