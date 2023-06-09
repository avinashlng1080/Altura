# Altura
An app that allows you to view your ETH balance using 12 word recovery seed



### Future Ideas
1. Add a way to view your balance in other currencies
2. Refresh balance on home screen
   - each time when visiting home screen
   - at regular interval (every 5 minutes) if the option is enabled
3. Implement Analytics to know which parts of the app are used the most
4. Implement CodePush to allow for faster production hotfixes
5. Implement Sentry for catching errors in Beta and Production environments
6. Store the database at a more secure custom location.  Over there, we can further encrypt its contents.
7. We can emulate multiple user accounts by having multiple user records with different ids.  Then, we'll need to  
   track down the user record with the latest time stamp.
   - To view the database content, please follow this link - https://github.com/Nozbe/WatermelonDB/issues/710#issuecomment-776255654
   - Just to point out that I submitted a PR to WatermelonDB - when I was working for Mattermost - to allow for custom  
     database locations.  For reference - https://github.com/Nozbe/WatermelonDB/pull/933
