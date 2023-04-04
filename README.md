#Introduction
Welcome to the Marvel Pedia! Here, you can explore the vast world of Marvel Comics and discover information about your favorite heroes, villains, and everything in between.
Website is built using the Marvel API, which allows us to access the latest and most accurate information about the Marvel universe.As of now you can search for characters only by name.
Whether you're a hardcore Marvel fan or just getting started, our website is the perfect resource for discovering everything you need to know about your favorite characters.

#Approach
To access the Marvel API, I have used combination of your private and public API keys, along with a timestamp to authorize my request. 
To make the request, use the fetch() method with the appropriate endpoint URL, along with your public key, timestamp, and hash as query parameters. Use the async/await syntax to handle the asynchronous nature of the request, and wait for the response to be returned as JSON.
Once the JSON data received, extracted the required information using standard JavaScript methods, such as dot notation or array indexing. Finally, appended the information to HTML document using appropriate DOM manipulation techniques.

#Tech Stack
HTML, CSS and JavaScript
