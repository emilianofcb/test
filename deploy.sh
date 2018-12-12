#!/bin/bash

# TODO: Run tests + coverage
# TODO: Analize reports
# TODO: If OK

ENV=$1
PROJECT_NAME="bizak-prestashop-$ENV"
HOME_DIR="/home/ubuntu"
VERSIONS_DIR="$HOME_DIR/versions"
PROJECT_DIR="$HOME_DIR/$PROJECT_NAME"

echo "ENV > $ENV"
echo "WORKSPACE > $WORKSPACE"
echo "PROJECT_NAME > $PROJECT_NAME"
echo "Moving checked out version to versions directory"

cp -r $WORKSPACE ./versions/$BUILD_TAG

echo "Stop Docker"
cd $PROJECT_DIR && docker-compose stop

echo "Unlink old version"
cd $HOME_DIR && unlink $PROJECT_NAME

echo "Link current version"
ln -s $VERSIONS_DIR/$BUILD_TAG $PROJECT_DIR

echo "Start Docker"
cd $PROJECT_DIR && docker-compose start