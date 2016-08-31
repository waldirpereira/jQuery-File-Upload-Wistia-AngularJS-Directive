# jQuery-File-Upload-Wistia-AngularJS-Directive
AngularJS directive for jQuery-File-Upload + Wistia

# Installation

1. Import all the dependencies:
  - jquery (v2.0.0+)
  - jquery.ui.widget
  - jquery.iframe-transport.js
  - jquery.fileupload.js
  - jquery.fileupload-process.js
  - jquery.fileupload-image.js
  - jquery.fileupload-video.js
  - angular.js (v1.5.8+)
  - Wistia E-v1.js

    Example:
    ```html
      <script src="https://code.jquery.com/jquery-2.0.0.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/vendor/jquery.ui.widget.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/jquery.iframe-transport.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/jquery.fileupload.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/jquery.fileupload-process.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/jquery.fileupload-image.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.12.5/js/jquery.fileupload-video.js"></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js"></script>
    ```

2. Import the `ng-jquery-upload-wistia.js` file to your `HTML`.

    Example:
    ```html
    <script src="scripts/ng-jquery-upload-wistia.js"></script>
    ```

3. Include the template in your project, for example at folder `templates`.

# Usage

1. You must include the module as a dependency of yours, something like:
    ```Javascript
    angular.module('myModule', ["jquery-upload-wistia"])
    ```

2. And use the tag `<jquery-upload-wistia>` with the attributes:
  - `api-password`: API password for your Wistia account
  - `project-id`: The project ID from Wistia
  - `template-full-path`: The full path for the template
  
  Example:
    ```HTML
    <jquery-upload-wistia 
      api-password="29d31cbad876ba8d76b8da7db6b8a7d6b8a7d6b8ba76db87ad6b14d61dea29bd" 
      project-id="7ff33klndh"
      template-full-path="templates/jquery-upload-wistia.html">
    </jquery-upload-wistia>
    ```

# Live demo

  * https://run.plnkr.co/Fw2iDRKBSgSEfSQx/
