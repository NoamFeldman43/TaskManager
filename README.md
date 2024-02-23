##TaskManager Documentation
Overview
TaskManager is a tool that allows users to manage tasks and templates. It provides a command-line interface (CLI) for interacting with the TaskManager environment. Below are some key features:

Adding Tasks: You can upload tasks (in JSON format) to the TaskManager. These tasks are associated with specific projects, users, and templates.
Adding Users: The CLI allows you to add new users to the TaskManager.
Adding Templates: Templates define the structure of tasks. You can upload templates to the TaskManager.
Updating Templates: Existing templates can be updated using the CLI.
Instructions for Running Locally
To run TaskManager on your local machine, follow these steps:

Clone the Repository:
Clone the TaskManager repository from GitHub using git clone.
Install Dependencies:
Ensure you have Python installed (version 3.6 or higher).
Install any required dependencies by running pip install -r requirements.txt.
Configuration:
By default, TaskManager will be reachable at localhost:27016.
The admin account has the username admin and password admin.
Configuration can be done via environment variables (see the Configuration section in the documentation).
Run the Application:
Execute python app.py to start the TaskManager server.
Access the web interface at http://localhost:27016.

Remember to thoroughly review the codebase, address these vulnerabilities, and follow best practices for secure development. Happy coding! 🚀
