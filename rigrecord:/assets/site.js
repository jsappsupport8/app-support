(function () {
  "use strict";

  var config = window.RIGRECORD_SITE_CONFIG || {};

  document.querySelectorAll("[data-support-email]").forEach(function (element) {
    var email = config.supportEmail || "js.appsupport8@gmail.com";
    element.textContent = email;
    if (element.tagName === "A" && email.indexOf("{{") !== 0) {
      element.href = "mailto:" + email;
    }
  });

  document.querySelectorAll("[data-effective-date]").forEach(function (element) {
    element.textContent = config.effectiveDate || "September 18, 2026";
  });

  document.querySelectorAll("[data-site-year]").forEach(function (element) {
    element.textContent = config.year || "2026";
  });
}());
