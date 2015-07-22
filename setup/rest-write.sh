# Change the environment variables below for your specific environment
ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_HOST=localhost
ML_ADMIN_PORT=8002
ML_DATA_PORT=9010

# Load RDF Data
curl -v --anyauth --user $ADMIN_UID:$ADMIN_PWD -X PUT -T ./572773090364674048.json "http://$ML_HOST:$ML_DATA_PORT/LATEST/documents?uri=/tweets/572773090364674048.json&format=json"

