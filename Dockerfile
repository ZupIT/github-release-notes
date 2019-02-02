FROM node

RUN npm install github-release-notes -g

ADD .grenrc.js /

ENTRYPOINT exec gren r -r ${GREN_REPO} -u ${USERNAME} -o --tags=all -T ${GREN_TOKEN}
