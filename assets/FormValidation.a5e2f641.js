function r(e){return e&&!a(e)?{valid:!1,reason:"Email address must be formatted as: example@email.com"}:{valid:!0}}function a(e){return e.includes("@")&&e.length>=3}function i(e){return e&&!n(e)?{valid:!1,reason:"Password must be at least 8 characters long."}:{valid:!0}}function n(e){return e.length>=8}function s(e){return e&&!t(e)?{valid:!1,reason:`
        Must be lowercase, must begin/end with an alphanumeric character, and contain
        only letters, numbers or dashes.
      `}:{valid:!0}}function t(e){return e.match(/^[a-z0-9][a-z0-9\\-]{0,67}[a-z0-9]$/)}function l(e){return e.endsWith(".zip")?{valid:!1,reason:"Do not include .zip file extension."}:{valid:!0}}export{i as a,s as b,r as c,l as d};
