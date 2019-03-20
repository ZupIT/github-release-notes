FROM node

ADD . /

ENTRYPOINT exec ./bin/gren.js notify -r ${GREN_REPO} -u zupit -o --tags=${TAG} -T ${GREN_TOKEN} --addresses=${ADDR_LIST} --notifier=release.notes@zup.com.br
