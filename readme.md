# ORANGE CONEHEADS
An interactive map repo demonstrating various disparate feeds on construction data and road closures.
The goal of this project is to demonstrate how local construction authorities can publish their data services
to match an industry specification, such as the Waze Community Partners spec: http://wazeblogs-en.blogspot.ie/p/connected-citizens-partner-feeds-specs.html

Localities throughout the country currently do this in order to push their data into Waze, for example:
* City of Boston: http://gis.cityofboston.gov/arcgis/rest/services/Live/Waze/MapServer/3
* City of Las Vegas: http://gis.rtcsnv.com/arcgis/rest/services/Maps/PROD_Waze/MapServer/0

More info is available in the Waze Partners Help Center: https://support.google.com/waze/partners/CCP/?hl=en#topic=6324400

## HAS:
Basic framework for index map (based on bootleaf), intended to demonstrate DOT's 511 feed JSON
Tools, TOC
Boston.html demonstrating how their Waze-styled feed can be consumed elsewhere: http://mmdolbow.github.io/orange-coneheads/bostonwaze.html

## NEEDS:
For index.html:
A way to toggle (radio button?) between DOT incident levels. For example:
- Priority max 1 (few or no records, high priority): http://hb.511mn.org/tgevents/api/eventReports?maxPriority=1
- Priority max 3 (more records, shows medium priority): http://hb.511mn.org/tgevents/api/eventReports?maxPriority=3

A way to use other parameters in the DOT feeds, such as extent boundaries. Example feed URL with more params:
http://hb.511mn.org/tgevents/api/eventReports?maxPriority=3&maxBeginDateOffset=7200000&minEndDateOffset=0&eventClassifications%5B%5D=roadReports&eventClassifications%5B%5D=winterDriving&eventClassifications%5B%5D=voxReports

### Team Photo
![Team Photo](http://mmdolbow.github.io/orange-coneheads/assets/img/teamphoto.png)