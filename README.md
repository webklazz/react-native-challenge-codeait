# React Native Challenge

Given the visual reference `reference.jpg`, let's create a small weather app.

- `Base URL`: http://api.weatherapi.com/v1
- `API KEY`: 6be8c28794924ed8a2a184922222905
- `Documentation`: https://www.weatherapi.com/docs/
- Assets included on `./assets/` folder
- Information about icons and codes can be found in https://www.weatherapi.com/docs/#weather-icons 

## Requeriments

### Main Screen
- On first init, the application should ask the user for his ubication in order to provide the main weather information
- The user should be able to search for locations on top bar, displaying ten results on a simple flat list
- On the bottom of the main screen, five other cities should be displayed on an carousel fashion
- Tapping on **Detailed** button, should navigate to the details screen (the one that is on the right) and display the information of the current location
- Tapping on any card of the bottom carousel, should navigate to the details screen and display the information for that location

### Details Screen
- Main information is displayed at the top
- The arrow button should navigate back to the main screen
- Forecast section should display cards containing temperature and humidity for diffentet moments of the given day, being those moments:
	- 10hs (Morning)
	- 14hs (Afternoon)
	- 18hs (Evening)
	- 22hs (Night)
- Tapping on **Tomorrow** button should switch the information of these cards in orden to display the values for the next day. Also the text and action of this button should change to **Today** giving the possibility to return.
- The bottomsheet should display other useful information that the API delivers (not necessary the same as the reference) like UV index, wind speed and direction, etc)
