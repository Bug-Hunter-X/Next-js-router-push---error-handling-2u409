# Next.js router.push() Error Handling
This repository demonstrates a common error in Next.js applications related to using the `router.push()` method without proper error handling for non-existent routes.

## Problem
The `MyComponent` attempts to navigate to a non-existent route using `router.push('/nonexistent-route')`.  Next.js doesn't automatically handle such cases gracefully; it can result in an error or unexpected behavior in the application.

## Solution
The solution involves using the `router.events` to listen for route change events. By handling the `routeChangeError` event we can gracefully manage this situation, providing feedback to the user or preventing unwanted behavior.

## How to reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Click on the button and observe the console for the error, demonstrating the problem.
6. Check the solution file which handles the error.