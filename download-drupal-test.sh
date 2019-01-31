#!/bin/bash

if [ -d drupal-compose ]
then
  pushd drupal-compose
  git pull
  popd
else
  git clone https://github.com/CheMical/drupal-compose.git
fi

drupal-compose/install.sh
