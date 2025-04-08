Tests - Transferring money

    Test: Transferring money Successfuly

        Expected results: Verify is it is possible to transfer money to a friend while having enough balance at your account.
        Test1:
            1 - Login with existent account - Logged in with username Heath93 sending money to friend Kristian

            2 - Access Home Page

            3 - Click on button 'NEW'

            4 - Select a friend account 'Kristian Bradtke'

            5 - Type ‘$100’ in the 'Amount' field - Tried transaction of $100 - balance was $100,00

            6 - Add a note 'Payment to Kristian'

            7 - Click on 'Pay' button

            8 - It needs to show a message “Transaction Submitted” 

        Test2 - Manual test
        
            1 - Login with existent account - Logged in with username Arvilla_Hegmann sending money to friend Ted

            2 - Access Home Page

            3 - Click on button 'NEW'

            4 - Select a friend account 'Ted'

            5 - Type ‘$100’ in the ‘Amount’ field - Tried transaction of $100 - balance was $100,00

            6 - Add a note 'Payment to Ted'

            7 - Click on 'Pay' button

            8 - It needs to show a message 'Transaction Submitted'

        Final results: While having enough money on the account, the transfer occurs with no errors. All the transactions showed the successful message 'Transaction Submitted'.

    Test: Transferring money failed

        Expected results: Verify is it is possible to transfer money to a friend while having enough balance at your account.
        Test1:
            1 - Login with existent account - Logged in with username Heath93

            2 - Click on NEW button

            3 - Select a friend

            4 - Add a higher amount than what you have on the balance - Tried transaction of $40.000,00 while the balance was $33.400,00

            5 - The transaction shouldn’t complete, since you do not have enough money

            6 - Check what errors appear

            7 - Document    
        
        Final results: BUG FOUND - Instead of receiving an alert message saying I do not have enough money for the transaction, it shows: ‘Transaction Submitted’
        
        Possible solution: Do not allow the user to transfer more money than they have. When trying to transfer more than the available balance, a message should appear: “Not enough balance” or “Add money to your account to complete the transaction.”





