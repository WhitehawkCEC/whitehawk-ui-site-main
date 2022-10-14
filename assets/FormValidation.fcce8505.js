function n(a){return a&&!e(a)?{valid:!1,reason:"Email address must be formatted as: example@email.com"}:{valid:!0}}function e(a){return a.includes("@")&&a.length>=3}function s(a){return a&&!t(a)?{valid:!1,reason:"Password must be at least 8 characters long."}:{valid:!0}}function t(a){return a.length>=8}function u(a){return a&&!r(a)?{valid:!1,reason:`
        Must be lowercase, must begin/end with an alphanumeric character, and contain
        only letters, numbers or dashes.
      `}:{valid:!0}}function r(a){return a.match(/^[a-z0-9][a-z0-9\\-]{0,67}[a-z0-9]$/)}export{s as a,u as b,n as c};
