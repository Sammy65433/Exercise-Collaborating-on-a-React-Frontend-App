Exercise: Collaborating on a React Frontend App
Objective: Successfully set up, clone, branch, and collaborate on a multi-page React application (using React Router and Context API) fetching data from an external API without overwriting each other’s work.

Step 1: Repository Setup
Who does this: One designated team member (The Driver).
Goal: Create the central hub for the project and give everyone access.
Create the Repo: The Owner logs into GitHub and creates a new Private or Public repository (e.g., react-team-project).
Add Collaborators: Go to the repository Settings tab.
Click Collaborators on the left menu.
Click Add people and invite the team members using their GitHub usernames or emails.
Accept Invites: Other members check their email or notifications on GitHub and accept the invitation.
Step 2: Initialize the React App & Push to Main
Who does this: The Driver.
Goal: Set up a React project with Vite that includes routing
Create a React app using Vite and open it in VS Code:
npm create vite@latest

project: react-team-project
framework: React
variant: JavaScript
linter: Oxlint
install: Yes
Install necessary dependencies for routing:
npm install react-router


Ensure .gitignore includes .env (create an .env file later for your API key if you have one).

Create a components folder and add an empty Nav.jsx file to it.
Create a pages folder and add an empty Home.jsx file to it.
Create a styles folder, move the App.css file into it, and make sure it’s imported correctly in App.jsx.

Verify the dev server runs (npm run dev), then push the base template to GitHub:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
Step 3: Clone the Project
Who does this: The other team members.
Goal: Get a local copy of the working base app.
Open your terminal and navigate to the folder where you want to keep your projects.
Clone the shared repo:
git clone <YOUR_GITHUB_REPO_URL>
cd react-team-project
Open the folder in VS Code.
Run npm install to install all dependencies locally.
Create a local .env file if an API key is required (e.g., VITE_API_KEY=your_key_here).
Step 4: Create Individual Member Branches
Who does this: Everyone (including the Driver).
Goal: Create a personal feature branch so you can build without breaking main.
Ensure you are on the updated main branch:
git checkout main
Create and switch to your personal branch:
git checkout -b bob
Push your branch to GitHub so it’s available remotely:
git push -u origin bob
Step 5: File-Based Assignment & Component Collaboration
To prevent merge conflicts, team members will choose files to work on and exclusively work in those files. Decide as a group who will work on what file, but make sure the work is evenly distributed amongst team members.

API Choice: Select one shared API for the team to use (e.g., DummyJSON, OMDb Movie API, TheCatAPI, or PokeAPI).

Project File & Component Structure
Pages

Page File	Description
Home.jsx	Main landing page layout. Renders <SearchBar/> and <ItemList/>.
ItemDetails.jsx	Single item detail view (using useParams).
Favorites.jsx	Saved favorites page display. Renders <ItemList/>.
NotFound.jsx	Fallback 404 error page. Contains a link to return to Home.jsx.
Components

Component File	Description
Nav.jsx	Site navigation. Contains a button for switching from light to dark mode with ThemeContext.
SearchBar.jsx	Contains an input and button. Rendered inside Home.jsx. Clicking the button should either make a request from api.js or filter the list.
ItemList.jsx	Renders inside Home.jsx and Favorites.jsx. Renders individual <Item/> components.
Item.jsx	Clicking on this component should send the user to the ItemDetails.jsx page. Also contains a button for adding the item to favoriteItems.
Core & Utility Files
File	Description
App.jsx	Renders <Nav/> and configures top-level routing (Routes/Route) to render pages. Contains state for items, favoriteItems, and theme. Provides ThemeContext. Calls useEffect with a request from api.js for initial data.
main.jsx	Application entry point and BrowserRouter configuration.
api.js	API service layer for HTTP request logic. Should contain a getItems(query) function used in App.jsx for initial data and a getItemDetails(id) function (or something like it) used in either SearchBar.jsx or ItemDetails.jsx.
context.js	Creates the context. Call it ThemeContext and export it.
CSS Styling
When adding styles to a component, members can create a CSS file for that component (ex: nav.css), put it in the styles folder (created in Step 2.4), and import it into their component (similar to App.css).

The Workflow & Pull Request Process
Follow this exact routine when completing feature assignments:

Commit and Push:
git add .
git commit -m "Added ItemDetails page"
git push origin bob
Open a Pull Request (PR):
Go to GitHub -> Pull requests -> New pull request.
Set base branch to main and compare branch to bob. (Video Resource: Pull Requests)
Lead Review & Merge:
The Driver reviews the code for breaking changes or syntax errors.
If clean, they click “Merge pull request”.
Syncing the Team:
After any PR is merged, every member must update their local main and merge into their personal branch:
git checkout main
git pull origin main
git checkout bob
git merge main
Encounter a Merge Conflict? Don’t panic. Open VS Code, accept current/incoming changes in the split editor, save the file, commit, and push again. (Video Resource: Merge Conflict)

Stuck in the Terminal? If it’s asking for a commit/merge message, you’re likely in VIM. To get out:

1. press "i" (insert)
2. write your commit/merge message
3. press "esc" (escape)
4. write ":wq" (write & quit) (can also press capital Z twice after ESC)
5. press enter


person1 app.jsx + api.js
per2 nav + context / css 
per3 home + search / css 
per4 itemlist + item  /css
per5 itemDetails  /css 
per6 fav + notfound  / css 

