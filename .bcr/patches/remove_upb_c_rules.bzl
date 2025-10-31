diff --git google/api/expr/v1alpha1/BUILD.bazel google/api/expr/v1alpha1/BUILD.bazel
index 9bed46809..197e5249c 100644
--- google/api/expr/v1alpha1/BUILD.bazel
+++ google/api/expr/v1alpha1/BUILD.bazel
@@ -233,32 +233,32 @@ cc_proto_library(
 ##############################################################################
 # upb
 ##############################################################################
-load(
-    "@com_google_googleapis_imports//:imports.bzl",
-    "upb_c_proto_library",
-)
-
-upb_c_proto_library(
-    name = "checked_upb_proto",
-    deps = [":checked_proto"],
-)
-
-upb_c_proto_library(
-    name = "eval_upb_proto",
-    deps = [":eval_proto"],
-)
-
-upb_c_proto_library(
-    name = "explain_upb_proto",
-    deps = [":explain_proto"],
-)
-
-upb_c_proto_library(
-    name = "syntax_upb_proto",
-    deps = [":syntax_proto"],
-)
-
-upb_c_proto_library(
-    name = "value_upb_proto",
-    deps = [":value_proto"],
-)
+#load(
+    #"@com_google_googleapis_imports//:imports.bzl",
+    #"upb_c_proto_library",
+#)
+#
+#upb_c_proto_library(
+    #name = "checked_upb_proto",
+    #deps = [":checked_proto"],
+#)
+#
+#upb_c_proto_library(
+    #name = "eval_upb_proto",
+    #deps = [":eval_proto"],
+#)
+#
+#upb_c_proto_library(
+    #name = "explain_upb_proto",
+    #deps = [":explain_proto"],
+#)
+#
+#upb_c_proto_library(
+    #name = "syntax_upb_proto",
+    #deps = [":syntax_proto"],
+#)
+#
+#upb_c_proto_library(
+    #name = "value_upb_proto",
+    #deps = [":value_proto"],
+#)
diff --git google/rpc/BUILD.bazel google/rpc/BUILD.bazel
index 31fd6457d..c38f00c46 100644
--- google/rpc/BUILD.bazel
+++ google/rpc/BUILD.bazel
@@ -11,7 +11,7 @@ load(
     "php_proto_library",
     "py_gapic_assembly_pkg",
     "py_proto_library",
-    "upb_c_proto_library",
+    #"upb_c_proto_library",
 )
 load("@rules_proto//proto:defs.bzl", "proto_library")

@@ -104,15 +104,15 @@ cc_proto_library(
     deps = [":status_proto"],
 )

-upb_c_proto_library(
-    name = "code_upb_proto",
-    deps = [":code_proto"],
-)
+#upb_c_proto_library(
+    #name = "code_upb_proto",
+    #deps = [":code_proto"],
+#)

-upb_c_proto_library(
-    name = "status_upb_proto",
-    deps = [":status_proto"],
-)
+#upb_c_proto_library(
+    #name = "status_upb_proto",
+    #deps = [":status_proto"],
+#)

 py_proto_library(
     name = "code_py_proto",
diff --git repository_rules.bzl repository_rules.bzl
index 2f87ad682..2ab3bd054 100644
--- repository_rules.bzl
+++ repository_rules.bzl
@@ -224,11 +224,11 @@ def switched_rules_by_language(
     #
     # upb
     #
-    rules["upb_c_proto_library"] = _switch(
-        upb,
-        "@com_google_protobuf//bazel:upb_c_proto_library.bzl",
-        "upb_c_proto_library",
-    )
+    #rules["upb_c_proto_library"] = _switch(
+    #    upb,
+    #    "@com_google_protobuf//bazel:upb_c_proto_library.bzl",
+    #    "upb_c_proto_library",
+    #)

     #
     # PHP