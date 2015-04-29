curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/documents?uri=/songs/song1.xml"

# 2:  return a document from the database with properties -->
curl --anyauth --user admin:marklogic1 -X GET -H "Accept: multipart/mixed;boundary=BOUNDARY" "http://localhost:7010/v1/documents?uri=/songs/song2.json&category=content&category=properties"

#  use curl to load "song3.xml" and put it into the collections "music" and "country" -->
curl --anyauth --user admin:marklogic1 -X PUT -T ./config/song3.xml "http://localhost:7010/v1/documents?uri=/songs/song3.xml&format=xml&collection=music&collection=country"

# 2:  search the database for any document that contains the word "the" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/search?q=the"

# 3:  search the "classic rock" collection for any document that contains the word "the" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/search?q=the&collection=classic rock"

# 4:  search (using key/values) for song titles containing the data "Free Falling" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/keyvalue?key=title&value=Free Falling"

# 5:  search (using key/values) for song titles containing the data "Against the Wind" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/keyvalue?key=title&value=Against the Wind"

# 6:  search (using element/values) for song titles containing the data "Against the Wind" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/keyvalue?element=title&value=Against the Wind"

# 7:  search the database for any document that contains the word "fall" -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/search?q=fall"

# 8:  search the database for any document that contains the word "road", returning the results as JSON -->
curl --anyauth --user admin:marklogic1 -X GET "http://localhost:7010/v1/search?q=road&format=json"
