# In-Memory Manager
The in-memory manager will allow us to store temporary data that will be accessible throughout the whole app.  
One such usage would be to set a flag to indicate that the app is in the process of being initialized ( or loading data ),  
and to prevent other parts of the app from trying to access the data before it is ready.
