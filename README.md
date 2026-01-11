# WDProjLithiumArrubioCaridad Project Proposal (UPDATED)

# Pokémon: Rebuilt

### Website Logo:
![website logo](https://archives.bulbagarden.net/media/upload/5/54/Bag_Great_Ball_SV_Sprite.png "Drawing of a great ball from Pokémon")

Bulbapedia. (2025, October 20). Great Ball - Bulbapedia, the community-driven Pokémon encyclopedia. Bulbapedia. https://bulbapedia.bulbagarden.net/wiki/Great_Ball#/media/File:Bag_Great_Ball_SV_Sprite.png

### Website Description:
- This website is designed to let players build teams for each generation/iteration of Pokémon. The users of the website will have the liberty to choose between creating teams for casual, single-player games of Pokémon and teams for more competetive and professional gameplay. Each mode of creation will also have the option to view and edit in-game specifics to further optimize each team. Additionally, this website will also display and showcase events, feats, and statistics from the Pokémon community.

### Planned Implementation of HTML Forms:
- HTML Forms will be used to save the user's data regarding the team. This will include the team name, the kind of pokemon in the team, the moves and statistics of each Pokemon, and other related characteristics.
- #### Updated Wireframe
  - Each updated wireframe will be displayed in the "Updated Wireframe" portion, which will be below the "Wireframe" portion of the readme file.

### Website Outline:
- Home Page
  - The general access menu for the website. Users will be able to go to each page of the website from here.
  - The home page may also highlight specific Pokémon events like tournaments, new game releases, etc. Each highlighted event will redirect the user to the highlights page.
  - JavaScript may be used for randomly selecting elements for the UI of the webpage.
- Team Builder
  - Users will be able to create their desired teams in this page. The user will also have the ability to toggle between Advanced (which includes statistics such as IVs, EVs, etc) and Casual (just Pokemon with their moves).
  - JavaScript will be used in retrieving data and displaying images for each Pokémon.
- Guides
  - This page will give detailed break-downs of each component of Pokémon in both the advanced and casual modes of the team builder.
  - Additionally, this page will also serve as a tutorial for the website.
  - JavaScript may be used for randomly selecting elements for the UI of the webpage.
- Highlights
  - This page will showcase recent events such as tournaments, tournament results, new game releases, etc. Each showcased event will redirect the user to the official page of the event when clicked.
  - The page will also display Pokémon used in tournaments, including fan-favorites, MVPs, most popular and more from tournaments and general Pokémon.
- Sources
  - This will showcase all the resources used in the website.

## Wireframe:
- Each wireframe will display each page without any additional in-page tabs opened.

### Home Page:
<img width="1080" height="1910" alt="HomePage" src="https://github.com/user-attachments/assets/7a864546-5983-4c42-9dba-bebb7a8e4d3d" />

### Team Builder:
<img width="1080" height="1061" alt="PokemonTeamBuilderP2" src="https://github.com/user-attachments/assets/28137400-7437-4a6e-a7bb-0a45cf720944" />

### Guides:
![Guides2](https://github.com/user-attachments/assets/6b9112a6-2b09-4da4-b1f4-64b0c88bc083)

### Highlights:
![Highlights](https://github.com/user-attachments/assets/5b4eb705-9e86-4bb8-ba29-fe1a4b01ca44)

### Sources: 
![Sources](https://github.com/user-attachments/assets/e9ce7ca3-f0a9-4e8c-903d-cf38381be17b)

## Updated Wireframe

### Team Builder:
<img width="1080" height="1061" alt="TeamBuilderSave" src="https://github.com/user-attachments/assets/feea3c82-8f07-4d6a-b752-9b603dd7232b" />

- This updated UI will be accessed via the save button, represented by the floppy disk in the menu bar.
- HTML forms will be used in saving/collecting user input data (the Pokemon in the team and their corresponding attributes), and saving them via localStorage. The data saved in localStorage will be retreived via the "Load Team" dropdown and a dropdown menu containing each team name will be displayed.

### Home Page
<img width="1080" height="2229" alt="HomePagePreference" src="https://github.com/user-attachments/assets/e545b5d0-0779-4397-9d13-66df328c4f2b" />

- User data regarding their prefererred article type will be collected via HTML forms. From there, only articles with those tags will be displayed.
- The collected data will be saved via localStorage.
- Additionally, this page will be directly connected to the Highlights page, letting it show articles that match the user's input.
  - Non-related articles may still appear given specific scenarios (e.x. if the user only selects "Games" and goes to the Highlights page, Media Highlights may still be seen as this is a major section of the page.) unless the visibility is toggled in the Highlights Page.

### Highlights Page
<img width="1080" height="4000" alt="highlightprefere" src="https://github.com/user-attachments/assets/d90d66c4-c047-4593-92f1-8e8a213dca54" />


- Similar to the Home Page, this will save the User's preferences for future use.



