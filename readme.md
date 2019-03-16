Bug :
- On edit : When no change, the element is remove nut nothing is recreate => check modifications before destroy
- On edit : Sometimes the class "draggable" and "inFront" stays => class are not remove properly
- On edit : Element move faster than the mouse cursor
- On move player it always switch to 0 before moving

In devlopment : 
- Create element 

Todo : 
1. Make fog manageable (remove, add and transparency)
2. Ability to change icons while editing the element
- Add a hint for no space (and disallow them) in name on edit and create
- Remove element
- Center the menu to open / create map
- After load (or create) center on player token
- Create factions (borders and color)
- Create a font to put icons in it (SVG, free icons / self made)
- Use a proper framework to do the stuff done by jQuery (vueJs, React, whateverJs)
- Find an awesome tokens for the party
- Add a calendar (or something that display date)
- Add link to the github
- Add link to the deviant-art map creator's page
- Save before quit


Maybe : 
- Load default map from web (currently data are store in js)
- Manage dynamically elements categories.
- Possibility to choose map (use the kingmaker video-game map ?) => no fog of war


Done :
- Load default map
- Load file
- Save file
- Default map
- Edit elements (partial)
- Hide menu on load file (Create and Load)
- Make elements movable on edit 
- Put js pluggins in local (usefull in plane)