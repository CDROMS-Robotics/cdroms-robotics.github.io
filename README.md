# CDROMS' website

This is the website of the CDROMS robotics team.

## Development setup

First time, install the node dependencies
`docker run --rm -it -v [PATH TO THE REPO]:/opt/project -w /opt/project node:24 npm i`.

Edit the path to the repo in the `docker-compose.yml`. Then start the docker compose using `docker compose up`. When a
file is changed it will reload the website.

## LICENSE

The [source](src) of this app is licensed under [GPLv3](LICENSE).  
Files in the [public](public) folder, except those in [restricted-assets](public/restricted-assets), are licensed
under [CC BY-NC-SA 4.0](LICENSE-CC).