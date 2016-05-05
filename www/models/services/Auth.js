'use strict';

function Auth(rootRef, $firebaseAuth) {
  return $firebaseAuth(rootRef);
}

Auth.$inject = ['rootRef', '$firebaseAuth'];
