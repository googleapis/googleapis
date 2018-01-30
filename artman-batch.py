from subprocess import check_call

mapping = {
    'bigquerydatatransfer': ['google/cloud/bigquery/datatransfer/artman_bigquerydatatransfer.yaml', 'gapic-google-cloud-bigquerydatatransfer-v1'],
    # 'bigtable': ['google/bigtable/artman_bigtable.yaml','gapic-google-cloud-bigtable-v2'],
    'bigtable_admin': ['google/bigtable/admin/artman_bigtableadmin.yaml', 'gapic-google-cloud-bigtable-admin-v2'],
    'container': ['google/container/artman_container.yaml', 'gapic-google-cloud-container-v1'],
    'dataproc': ['google/cloud/dataproc/artman_dataproc_v1.yaml',  'gapic-google-cloud-dataproc-v1'],
    'datastore': ['google/datastore/artman_datastore.yaml', 'gapic-google-cloud-datastore-v1'],
    'dialogflow': ['google/cloud/dialogflow/artman_dialogflow_v2beta1_java.yaml','gapic-google-cloud-dialogflow-v2beta1'],
    'dlp_v2beta1': ['google/privacy/dlp/artman_dlp.yaml', 'gapic-google-cloud-dlp-v2beta1'],
    'dlp_v2beta2': ['google/privacy/dlp/artman_dlp_v2beta2.yaml','gapic-google-cloud-dlp-v2beta2'],
    'errorreporting': ['google/devtools/clouderrorreporting/artman_errorreporting.yaml', 'gapic-google-cloud-error-reporting-v1beta1'],
    'firestore': ['google/firestore/artman_firestore.yaml', 'gapic-google-cloud-firestore-v1beta1'],
    'language_v1': ['google/cloud/language/artman_language_v1.yaml', 'gapic-google-cloud-language-v1'],
    'language_v1beta2': ['google/cloud/language/artman_language_v1beta2.yaml', 'gapic-google-cloud-language-v1beta2'],
    'logging': ['google/logging/artman_logging.yaml', 'gapic-google-cloud-logging-v2'],
    'longrunning': ['google/longrunning/artman_longrunning.yaml', 'gapic-google-longrunning-v1'],
    'monitoring': ['google/monitoring/artman_monitoring.yaml', 'gapic-google-cloud-monitoring-v3'],
    'oslogin': ['google/cloud/oslogin/artman_oslogin_v1.yaml', 'gapic-google-cloud-os-login-v1'],
    'pubsub': ['google/pubsub/artman_pubsub.yaml', 'gapic-google-cloud-pubsub-v1'],
    'spanner': ['google/spanner/artman_spanner.yaml', 'gapic-google-cloud-spanner-v1'],
    'spanner_admin_database': ['google/spanner/admin/database/artman_spanner_admin_database.yaml', 'gapic-google-cloud-spanner-admin-database-v1'],
    'spanner_admin_instance': ['google/spanner/admin/instance/artman_spanner_admin_instance.yaml', 'gapic-google-cloud-spanner-admin-instance-v1'],
    'speech_v1': ['google/cloud/speech/artman_speech_v1.yaml', 'gapic-google-cloud-speech-v1'],
    'speech_v1beta1': ['google/cloud/speech/artman_speech_v1beta1.yaml', 'gapic-google-cloud-speech-v1beta1'],
    'trace_v1': ['google/devtools/cloudtrace/artman_cloudtrace_v1.yaml', 'gapic-google-cloud-trace-v1'],
    'trace_v2': ['google/devtools/cloudtrace/artman_cloudtrace_v2.yaml', 'gapic-google-cloud-trace-v2'],
    'videointelligence_v1beta1': ['google/cloud/videointelligence/artman_videointelligence_v1beta1.yaml', 'gapic-google-cloud-video-intelligence-v1beta1'],
    'videointelligence_v1beta2': ['google/cloud/videointelligence/artman_videointelligence_v1beta2.yaml', 'gapic-google-cloud-video-intelligence-v1beta2'],
    'videointelligence_v1': ['google/cloud/videointelligence/artman_videointelligence_v1.yaml', 'gapic-google-cloud-video-intelligence-v1'],
    'vision_v1': ['google/cloud/vision/artman_vision_v1.yaml', 'gapic-google-cloud-vision-v1'],
    'vision_v1p1beta1': ['google/cloud/vision/artman_vision_v1p1beta1.yaml', 'gapic-google-cloud-vision-v1p1beta1']
}

artman_files = mapping.values()

i = 0
for api in artman_files:
  cmd = "rm -rf /usr/local/google/home/andrealin/Documents/git/veneer/googleapis/artman-genfiles/api-client-staging"
  print(cmd)
  check_call(cmd.split())
  print(api)
  artman_file = api[0]
  gapic = api[1]
  cmd = "artman --local --config " + artman_file + " publish --dry-run --target staging java_gapic"
  print(cmd)
  check_call(cmd.split())
  i += 1
  cmd = "mv /usr/local/google/home/andrealin/Documents/git/veneer/googleapis/artman-genfiles/api-client-staging/generated/java/" + gapic +  " /usr/local/google/home/andrealin/Documents/git/veneer/googleapis/artman-genfiles/staging/generated/java/" + gapic
  print(cmd)
  check_call(cmd.split())
