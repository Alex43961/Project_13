const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");

async function createProject() {
	await fsPromises.mkdir("project");

	await fsPromises.mkdir(path.join(__dirname, "project", "styles"));
	await fsPromises.mkdir(path.join(__dirname, "project", "pages"));
	await fsPromises.mkdir(path.join(__dirname, "project", "public"));

	await fsPromises.mkdir(path.join(__dirname, "project", "public", "images"));
	await fsPromises.mkdir(path.join(__dirname, "project", "public", "icons"));
	await fsPromises.mkdir(path.join(__dirname, "project", "public", "fonts"));

	await fsPromises.appendFile(
		path.join("project", "index.html"),
		`
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> -->
    <title>New Project</title>
    </head>
    <body>
	 <div id= "app">
	 <header class="header">
	 <div class="logo-vrapper"></div>
	 <nav class= "nav"></nav>
	 </header>
	 <div class= "container">
	 <aside class="sidebar"></aside>
	 <main class= "main"></main>
	 </div>
	 <footer class= "footer"></footer>
	 </div>
	 </body>
</html>
     `,
		{
			encoding: "utf-8",
		}
	);

	await fsPromises.appendFile(
		path.join(__dirname, "project", "styles", "style.css"),
		`* {
    padding : 0;
    margin : 0;
    box-sizing : border-box;
}
a {
    text-decoration : none;
    color : inherit;
}
li {
    list-style-type : none ;
}
    `,
		{
			encoding: "utf-8",
		}
	);

	await fsPromises.appendFile(
		path.join(__dirname, "project", "styles", "variables.css"),
		`:root {
		/* background */
		--primary-bg: #c9d1f1;
		--secondary-bg: rgb(43, 3, 81);
		--third-bg: rgb(145, 209, 232);
		--bg-gradient: linear-gradient(rgb(143, 200, 181), rgb(217, 207, 249));
		--bg-gradient-l: linear-gradient(rgb(217, 207, 249), rgb(143, 200, 181));
	
		/* text-color */
		--primary-color: rgb(85, 149, 146);
		--secondary-color: rgb(17, 10, 110);
		--third-color: rgb(128, 21, 234);
	
		/* font size */
		--font-size-xl: 3rem;
		--font-size-l: 1.5rem;
		--font-size-m: 1rem;
		--font-size-s: .5rem;
	
		/* padding */
		--padding-xl: 3rem;
		--padding-l: 2rem;
		--padding-m: 1rem;
		--padding-s: .5rem;
	
		/* margin */
		--margin-xl: 3rem;
		--margin-l: 2rem;
		--margin-m: 1rem;
		--margin-s: .5rem;
	
		/* box-shadow */
		--box-shadow-xl: 5px 5px 8px 3px darkmagenta;
		--box-shadow-l: 2px 2px 3px 1.5px rgb(15, 30, 195);
		--box-shadow-m: 1px 1px 2px .5px darkmagenta;
	
		/* font-family */
		--ff-primary: 'Lato', sans-serif;
		--ff-secondary: 'Roboto', sans-serif;
}
    `,
		{
			encoding: "utf-8",
		}
	);

	await fsPromises.appendFile(
		path.join("project", ".gitignore"),
		"node_modules",
		{ encoding: "utf-8" }
	);
}

fs.exists(path.join(__dirname, "project"), (exist) => {
	if (!exist) {
		createProject();
	}
	if (exist) {
		fs.rmdir("/project", () => {
			console.log("removed");
		});
	}
});