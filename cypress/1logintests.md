Test cases

1 - Access Real World App by running the app on VS Code (yarn dev)

Test case - Login Successful

    Expected results: Verify that it is possible to log in with a valid user info, inserting existing details on database.

    1 - Log in with an existing credentials; email address and password:

      "username": "Heath93",
      "password": "s3cret"

    2 - Click the button to submit

    3 - Validate the successful by identifying the log in page

    Final results: Successfuly logged in using existing user data from database of Real World App



Test case - Login Unsuccessful

Expected results: Verify an alert message when trying to log in with non existent credentials on database. User should not be able to log in using wrong/non existing credentials.

    1 - Log in with an existing credentials; email address and password:

      "username": "Romeu",
      "password": "s3cret"

    2 - Click the button to submit

    3 - Validate the unsuccessful log in by identifying the wrong credential alert (message) 

Final results: Confirmed that with no existing user details, Login can not be done.