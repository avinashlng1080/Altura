# Design Consideration

I have been working for the past 2 years and over there, we have conducted intensive experiments on the React Native framework.  
We have built a few apps for our internal products.  

When it comes to the best practices when it comes to architecture, I would say that hand down, 
getting closer to Native, provides the best performance.

#### State Management
I chose [WatermelonDB](https://watermelondb.dev/index.html) as the database for this app instead of using Realm or Redux.  I conducted
tests for over a million records and it scored the highest in terms of CRUD operations.

#### Navigation
The next best thing is to use Wix Navigation.  However, at the time, I am writing this doc, I encountered a few issues with Wix Navigation with the 
latest RN version.  Hence, I decided to go with React Navigation, which offers a lot of flexibility and very close native experience. Like we did 
in the past, I can even use both navigation libraries to suit out purpose.

#### Error Reporting
I have used Sentry for error reporting.  It is very easy to integrate and it is very easy to use.

#### Over the Air Update
CodePush is the best solution for this.  It is very easy to integrate and it is very easy to use.

#### Testing
Testing should occur at multiple levels 
- Unit Testing by the dev
- Integration Testing by scripts
- End-to-End Testing via Detox

#### CI/CD
Our CI/CD should lint and test and validate builds for all platforms.  

#### Performance
- Hermes
- We can even run performance test for specific screens/components.
- RN New Architecture
- Count API calls
- Minimize API calls
- Minimize DB calls
- Minimize UI updates/renders
- Monitor usage of 
  - memory
  - CPU
  - network
  - disk
  - battery

#### Security
Storing private keys in the Apple KeyChain or Android KeyStore is the best way to secure the private keys.
I also wanted to implement a PIN screen that will force the user to enter a PIN to use the app; request to enter it every X minutes when in fore/background.

#### Documentation
