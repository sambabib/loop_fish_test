# Some notes about my submission

1. It is important to note that my submission does not fully account for browser refresh when the app is demoed. Hence, it is prone to losing state values on browser refresh (I believe this is beyond the scope of the test).

2. The "CheckAndCleanTank" fn reinforces the point above. This informed my decision to implement checking and alerting user(s) to the tank cleaning schedule.

3. I added a "removeFishTypeFromTank" fn as a bonus to account for the counter-logic of being able to add a fish type to the tank as it is a management system.

# Usage

I spun this using vue3 global CDN, so it is without a build step and typically requires the live server vscode extension to serve the "index.html" on a port (basically run the demo).

Please follow the steps below to run the demo without using the extension.

# Launch demo

1. Install http-server. Run npm install http-server -g
2. cd into the project directory
3. Run http-server
4. The app will launch on localhost:8080

Thank you.
