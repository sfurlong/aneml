ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_HOST=localhost
ML_DATA_PORT=9010
#
# REST API call to search the database for any document that contains the word "bigdata", returning the results as JSON
#curl --anyauth --user admin:marklogic1 -X GET http://localhost:9010/v1/search?q=bigdata&format=json

# REST API call to search the database for any document that contains the word "bigdata", returning the results as JSON
#curl --anyauth --user admin:marklogic1 -X GET http://localhost:9010/v1/search?q=bigdata&format=json&category=content

# REST API call to search the database for any document that contains the word "bigdata", returning the results as JSON
curl --anyauth --user admin:marklogic1 -X GET -i -i "Accept: multipart/mixed; boundary=BOUNDARY" http://localhost:9010/v1/search?q=bigdata&format=json&view=results