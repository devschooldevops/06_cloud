# Flask app on azure cloud
### if any team needs help and you already did the task, you can help them out

## 1. Create an azure vm
1. Log in to the Azure Portal https://portal.azure.com/
2. Click "Create a resource" and search for "Virtual Machine"
3. Choose Ubuntu Server
4. Select the free size VM
5. Set authentication to "SSH"
6. Allow inbound ports: HTTP (80), HTTPS (443), and SSH (22)
7. Review and create the VM

## 2. Connect to the vm
1. Open a terminal on mac/linux or download putty on windows
2. For mac/linux use the terminal to SSH
3. For windows use putty UI

## 3. Set up the vm
1. Update package indexes: `sudo apt update`. do not upgrade (it might take some minutes)
2. Install prerequisites: `sudo apt install python3 python3-pip python3-venv`
3. Install git if not available

## 4. Clone repo and set up the project
1. Clone repo: `git clone https://github.com/devschooldevops/06_cloud.git`
2. Use branch `2024`
3. Go into the `flask-app` directory
4. Create a venv (virtual environment): `python3 -m venv venv`
5. Activate the virtual environment: `source venv/bin/activate`
6. Install required packages: `pip install -r requirements.txt`

## 5. Modify the application defaults
1. Edit the `app.py` using `vi` with information about you, the people from the team

## 6. Run the Application
1. Run the app with: `sudo $(which python) app.py`
   1. optional: tell the class why we need to run this with sudo
   1. optional: or maybe you know why we use the `which python` command?
2. Access your website at `http://your_vm_ip`

## 7. Set up domain with duckdns
1. Create an account at https://www.duckdns.org/
2. Create a subdomain named `your_team_name-devschool`
3. Go to `your_team_name-devschool.duckdns.org`

# BONUS
#### ofc you can search google anytime
## 8. Upload the repo from the vm to new azure devops repo

## 9. Run the app in the background

## 10. Have the application logs in a file

## 11. Make the app run without sudo
