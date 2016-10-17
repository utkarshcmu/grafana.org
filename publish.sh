#!/usr/bin/env bash

export AWS_S3_BUCKET=staging.grafana.org

grunt_param="--env=staging"
include=""

if [ "$1" = "prod" ]; then
  echo "Publishing to production\n"
  grunt_param="--env=prod"
  AWS_S3_BUCKET=grafana.org
else
  echo "Publishing to staging\n"
fi;

if [ "$2" != "" ]; then
  include="$2"
  echo "include filter: $include\n"
fi;


export BUCKET=$AWS_S3_BUCKET

export AWS_CONFIG_FILE=$(pwd)/awsconfig

[ -e "$AWS_CONFIG_FILE" ] || usage

export AWS_DEFAULT_PROFILE=$BUCKET

echo "cfg file: $AWS_CONFIG_FILE ; profile: $AWS_DEFAULT_PROFILE"

gzip_all() {
  rm -Rf dist_gzip/
  rsync -a --progress dist/ dist_gzip/
  gzip -9fr dist_gzip/
  FILES=`find dist_gzip`
  for FILE in $FILES; do
    NEW_FILE=${FILE/.gz/}
    if [ "${FILE}" != "${NEW_FILE}" ]; then
      mv ${FILE} ${NEW_FILE}
    fi;
  done;
}

setup_s3() {
  echo "Create $BUCKET"
  # Try creating the bucket. Ignore errors (it might already exist).
  aws s3 mb --profile $BUCKET s3://$BUCKET 2>/dev/null || true
  # Check access to the bucket.
  echo "test $BUCKET exists"
  aws s3 --profile $BUCKET ls s3://$BUCKET
  # Make the bucket accessible through website endpoints.
  echo "make $BUCKET accessible as a website"
  #aws s3 website s3://$BUCKET --index-document index.html --error-document jsearch/index.html
  s3conf=$(cat s3_website.json)
  echo
  echo $s3conf
  echo
  aws s3api --profile $BUCKET put-bucket-website --bucket $BUCKET --website-configuration "$s3conf"
}

upload_s3() {
  src=dist/
  dst=s3://$BUCKET

  # make site rss use blog rss
  cp dist/blog/index.xml dist/index.xml
  # old file name for rss feed
  cp dist/blog/index.xml dist/feed.xml

  cache=max-age=3600
  if [ "$NOCACHE" ]; then
    cache=no-cache
  fi

  echo
  echo "Uploading $src"
  echo "  to $dst"
  echo

  exclude="--exclude *"
  encoding=''

  aws s3 cp $src $dst --recursive --exclude "*" --include "css/*.css" --include "js/*.js" --include $include --profile $BUCKET --cache-control $cache --acl public-read $encoding
}

#setup_s3
grunt build $grunt_param
upload_s3
