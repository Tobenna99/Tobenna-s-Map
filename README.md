# Tobenna-s-Map
This is a simple map application that allows users to view their current location and get directions to another location


Overview
This is a simple map application that allows users to view their current location and get directions to another location. It uses the Mapbox API to display the map and provide directions.

Dependencies
This code requires the following dependencies:

Mapbox GL JS
Mapbox GL Directions plugin
Usage
To use this map application, simply open the index.html file in a web browser. The application will request permission to access the user's current location. If permission is granted, the map will be centered on the user's location. If permission is denied, the map will be centered on a default location.

To get directions to another location, click the "Directions" button in the top left corner of the map. This will open a panel where you can enter a starting and ending location.

Code Structure
The code is divided into two files:

index.html: This file contains the HTML markup for the map application. It includes references to the Mapbox GL JS library, the Mapbox GL Directions plugin, and a separate JavaScript file (script.js) that contains the application logic.

script.js: This file contains the JavaScript code that sets up the map and provides the application logic. It includes functions for getting the user's location, setting up the map, and adding a navigation control and directions to the map.

Future Improvements
Here are some ideas for future improvements to this map application:

Add support for displaying multiple points of interest on the map.
Allow users to search for locations on the map.
Use a different map style or add custom markers to the map.
Improve the user interface by adding more features or refining the design.
Overall, this is a good start to a map application that can be expanded upon to add more functionality and features.
