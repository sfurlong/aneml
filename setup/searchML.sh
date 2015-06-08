#
ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_HOST=localhost
ML_DATA_PORT=9010

# REST API call to search the database for any document that contains the word "bigdata", returning the results as JSON
curl --anyauth --user $ADMIN_UID:$ADMIN_PWD -X GET -i -H "Accept: multipart/mixed; boundary=BOUNDARY" http://$ML_HOST:$ML_DATA_PORT/v1/search?q=bigdata&format=json&view=results