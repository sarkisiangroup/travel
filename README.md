 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index d453f177b66ae0c0925b98e4ac51685f811812c7..3e2b73c11faccf4c3a5341ca8196f64dfdba0e7c 100644
--- a/README.md
+++ b/README.md
@@ -1,6 +1,9 @@
 # 📚 API Documentation Links
 
 Here are the key API and integration references for this project:
 
 - [Sticky.io API Documentation](https://developer-prod.sticky.io/#0ae10353-5e55-47f5-a029-5e8973d73360)
 - [3DS Integrator JavaScript SDK Docs](https://docs.3dsintegrator.com/docs/3ds-with-javascript-sdk)
+
+The `frontend.html` file in this repo is a static checkout page template served
+as plain HTML. It is **not** a Node.js script.
 
EOF
)
