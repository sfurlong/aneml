# Port should be the HTTP port that the target database is listening to.

MLCP_HOME=/Users/sfurlong/ML-DEV/mlcp-Hadoop2-1.3-1

$MLCP_HOME/bin/mlcp.sh import -host localhost -port 9010 -username admin -password marklogic1 -input_file_path ./tweet-data 
