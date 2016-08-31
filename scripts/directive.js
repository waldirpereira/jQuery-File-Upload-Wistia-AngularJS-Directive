app.constant('URL', 'templates/');

app.factory('TemplateService', function($http, URL) {
  var getTemplate = function() {
    return $http.get(URL + 'jquery-upload-wistia.html');
  };
  return {
    getTemplate: getTemplate
  };
});

app.directive("jqueryUploadWistia", ["$compile", "$timeout", "TemplateService", function($compile, $timeout, TemplateService) {
  return {
    restrict: "E",
    scope: {
      apiPassword: '@',
      projectId: '@'
    },
    link: function(scope, element) {
      TemplateService.getTemplate().then(function(response) {
        var template = response.data;
        element.html(template);
        $compile(element.contents())(scope);

        $timeout(function() {
          var $element = $(element);
          var $input = $element.find("input.fileupload");
          var $cancelButton = $element.find(".fileupload-cancel");
          var $embedContainer = $element.find(".fileupload-embed");
          var $embedElement = $embedContainer.find(".wistia_embed");
          var $errorContainer = $element.find(".fileupload-error");
          var $errorDiv = $errorContainer.find(".fileupload-error-message")
          var $progressBar = $element.find(".progress .progress-bar");

          $progressBar.updateProgress = function(progress) {
            var percent = progress + "%";
            this.css("width", percent).html(percent);
          };

          $input.fileupload({
            dataType: "json",
            add: function(e, data) {
              $cancelButton.toggle(true);
              $errorContainer.toggle(false);
              $embedContainer.toggle(false);
              var jqXHR = data.submit();

              $cancelButton.click(function() {
                jqXHR.abort();
                $progressBar.updateProgress(0);
                $cancelButton.toggle(false);
              });
            },
            done: function(e, data) {
              var hash = data.result.hashed_id;
              $embedElement.attr("id", "wistia_" + hash);
              $embedContainer.toggle(true);
              Wistia.embed(hash);
              $cancelButton.toggle(false);
            },
            fail: function(e, data) {
              if (data.textStatus !== "error")
                return;
              $errorDiv.html(data.jqXHR.responseJSON.error);
              $errorContainer.toggle(true);
              $cancelButton.toggle(false);
            },
            progress: function(e, data) {
              var progress = parseInt(data.loaded / data.total * 100, 10);
              $progressBar.updateProgress(progress);
            }
          });

        });
      });
    }
  };
}]);
