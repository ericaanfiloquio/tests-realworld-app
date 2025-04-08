Test cases - Creating New User

1 - Access Real World App by running the app on VS Code (yarn dev)

    Test cases - Create New User Successfully

        Expected results: Verify that it is possible to register a new user, filling up all the information correctly.

        1 - Click on “Don’t have an account yet, sign up”

        2 - Fill up First Name, example: ‘Joana’

        3 - Fill up Last Name, example: ‘Santos’

        4 - Fill up Username, example: ‘Joana Santos’

        5 - Create password field, example: ‘testando’

        6 - Confirm password field, example: ‘testando’

        7 - Click Sign Up

        8 - Confirming that new user was created

        9 - Log in with new user credentials

        10 - Confirm it was logged in, by identifying Home page

    Final results: New User created with all the fields required; Logged in to prove user is on database.



    Test case - Create New User Unsuccessfully

        Expected results: Register a new user with incomplete data. Make sure that the system shows the error message when you try to create a new user with incomplete credentials and mandatory information. 

        1 - Understand what are the creteria for a Successful User Registration

    Creteria for a Successful New User:

        Mandatory First Name
        Mandatory Last Name
        Mandatory Username
        Mandatory Password with at least 4 characters and it can be the same characters
        Mandatory Password match with the Password written in the field “Confirm Password”
        There is no limit of characters for the Password
        Name, Last Name and Username can have only 1 character
        Name, Last Name and Username can be numbers
        Any kind of character is accepted in all the fields
            

            2 - Click on “Don’t have an account yet, sign up”

            3 - Try to create a User with 3 characters as a Password

            4 - Try to create with no Username field

    Evidences:
        Alert messages for incomplete registration:

        First Name is required
        Last Name is required
        Username is required
        Password must contain at least 4 characters
        Password does not match

        When mandatory creteria is not followed, Sign Up button do not light up - we can not finalize the registration. And the alert messages show up in red color.

