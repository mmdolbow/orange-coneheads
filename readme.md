ORANGE CONEHEADS
An interactive map repo demonstrating various disparate feeds

HAS:
Basic framework for map (based on bootleaf)
Tools, TOC

NEEDS:
A way to toggle (radio button?) between DOT incident levels. For example:
- Priority max 1 (few or no records, high priority): http://hb.511mn.org/tgevents/api/eventReports?maxPriority=1
- Priority max 3 (more records, shows medium priority): http://hb.511mn.org/tgevents/api/eventReports?maxPriority=3

A way to use other parameters in the DOT feeds, such as extent boundaries. Example feed URL with more params:
http://hb.511mn.org/tgevents/api/eventReports?maxPriority=3&maxBeginDateOffset=7200000&minEndDateOffset=0&eventClassifications%5B%5D=roadReports&eventClassifications%5B%5D=winterDriving&eventClassifications%5B%5D=voxReports
