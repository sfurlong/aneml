# Change the environment variables below for your specific environment
ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_HOST=localhost
ML_ADMIN_PORT=8002
ML_DATA_PORT=9010

# Create the REST instance.  This will also creat the DB and Forest specified in the JSON file
curl --anyauth --user $ADMIN_UID:$ADMIN_PWD -X POST -d@"./rest-instance.json" -i -H "Content-type: application/json" http://$ML_HOST:$ML_ADMIN_PORT/v1/rest-apis

# Load Data JSON
curl --anyauth --user $ADMIN_UID:$ADMIN_PWD -X PUT -T ./tweet-data/572773090364674048.json "http://$ML_HOST:$ML_DATA_PORT/v1/documents?uri=/tweets/572773090364674048.json&format=json"

