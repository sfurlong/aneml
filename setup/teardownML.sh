# Change the environment variables below for your specific environment
ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_HOST=localhost
ML_ADMIN_PORT=8002

# delete the database
curl -X DELETE --anyauth --user $ADMIN_UID:$ADMIN_PWD "http://$ML_HOST:$ML_ADMIN_PORT/v1/rest-apis/tweet-deck?include=content&include=modules"
