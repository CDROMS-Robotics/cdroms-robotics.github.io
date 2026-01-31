# CDROMS' website

This is the website of the CDROMS robotics team.

![Website](https://img.shields.io/badge/Website-Online-brightgreen?)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-a957f9.svg)](LICENSE)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-e557f9.svg)](LICENSE-CC)
![Stars](https://img.shields.io/github/stars/CDROMS-Robotics/cdroms-robotics.github.io?style=social)

![cdroms](https://github.com/user-attachments/assets/efd5609f-3e75-4364-b509-2203a587a18e)

## Development setup

First time, install the node dependencies:

```bash
docker run --rm -it -v [PATH TO THE REPO]:/opt/project -w /opt/project node:24 npm i
```

Edit the path to the repo in the `docker-compose.yml`. Then start the docker compose using `docker compose up`. When a
file is changed it will reload the website.

## LICENSE

The [source](src) of this app is licensed under [GPLv3](LICENSE).  
Files in the [public](public) folder, except those in [restricted-assets](public/restricted-assets), are licensed
under [CC BY-NC-SA 4.0](LICENSE-CC).
