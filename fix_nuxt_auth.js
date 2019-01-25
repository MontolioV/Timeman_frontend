/*
 * This script fixes auth0 audience issue in @nuxt/auth module.
 * It's a workaround till new release of @nuxt/auth module.
 * Currently this problem is fixed in dev brunch of @nuxt/auth module.
 * https://github.com/nuxt-community/auth-module/pull/222
 */

const fs = require('fs');
const replace = require('replace-in-file');

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
const modifiedPart = `const opts = {
      protocol: 'oauth2',
      response_type: this.options.response_type,
      client_id: this.options.client_id,
      redirect_uri: this._redirectURI,
      scope: this._scope,
      state: randomString()
    }`;
const requiredPart = `const opts = {
      protocol: 'oauth2',
      response_type: this.options.response_type,
      client_id: this.options.client_id,
      redirect_uri: this._redirectURI,
      scope: this._scope,
      state: randomString(),
      audience: this.options.audience
    }`;
const optionsLib = {
  files: './node_modules/@nuxtjs/auth/lib/schemes/oauth2.js',
  from: new RegExp(escapeRegExp(modifiedPart)),
  to: requiredPart,
};

let changes = replace.sync(optionsLib);

if (changes.length !== 0) {
  console.log('@nuxt/auth auth0 scheme fixed:', changes.join(', '));
  nuxtBuildAuth0Scheme = __dirname + '/.nuxt/auth/schemes/oauth2.js';
  fs.unlink(nuxtBuildAuth0Scheme, err => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });
  throw 'Rebuild required!';
}
