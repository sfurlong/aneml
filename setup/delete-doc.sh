ADMIN_UID=admin
ADMIN_PWD=marklogic1
ML_ADMIN_HOST=localhost
ML_DATA_PORT=9010
curl --anyauth --user admin:marklogic1 -X DELETE "http://$ML_ADMIN_HOST:$ML_DATA_PORT/v1/documents?uri=/tweets/572773090364674048.json"

