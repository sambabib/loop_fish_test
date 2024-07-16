# Some notes about my submission

1. It is important to note that my submission does not fully account for browser refresh when the app is demoed. Hence, it is prone to losing state values on browser refresh (I believe this is beyond the scope of the test).

2. The "CheckAndCleanTank" fn reinforces the point above. This informed my decision to implement checking and alerting user(s) to the tank cleaning schedule.

3. I added a "removeFishTypeFromTank" fn as a bonus to account for the counter-logic of being able to add a fish type to the tank as it is a management system.

4. I also made a last-minute decision not to include showing errors in the markup (using errorMessage.value), however, they are stored in the "errorMessage" state.

Thank you.
