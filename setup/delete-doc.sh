ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_ADMIN_HOST=localhost
ML_DATA_PORT=7010
curl --anyauth --user admin:marklogic1 -X DELETE "http://localhost:7010/v1/documents?uri=/songs/song3.xml"

