Package.describe({
  summary: "Provides bootstrap 3."
});

Package.on_use(function (api) {
  api.use('jquery');
  api.use('bootstrap-3');
  var path = Npm.require('path');
  

    
  var asset_path = path.join('public/assets');
    
//    css
    

  api.add_files(path.join(asset_path, 'css', 'style-metronic.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'style.css'), 'client'); 
      api.add_files(path.join(asset_path, 'css', 'style-responsive.css'), 'client'); 
      api.add_files(path.join(asset_path, 'css', 'plugins.css'), 'client'); 
      api.add_files(path.join(asset_path, 'css', 'themes/default.css'), 'client'); 
      api.add_files(path.join(asset_path, 'css', 'custom.css'), 'client'); 
      api.add_files(path.join(asset_path, 'plugins', 'jquery-easy-pie-chart/jquery.easy-pie-chart.css'), 'client'); 
    api.add_files(path.join(asset_path, 'fonts', 'font.css'), 'client'); 
    
    
//js
    
api.add_files(path.join(asset_path, 'plugins', '/jquery-migrate-1.2.1.min.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'jquery-slimscroll/jquery.slimscroll.min.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'jquery.blockui.min.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'jquery.cokie.min.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'gritter/js/jquery.gritter.js'), 'client');
 api.add_files(path.join(asset_path, 'plugins', 'flot/jquery.flot.js'), 'client');
    api.add_files(path.join(asset_path, 'plugins', 'flot/jquery.flot.resize.js'), 'client');
    api.add_files(path.join(asset_path, 'plugins', 'jquery-easy-pie-chart/jquery.easy-pie-chart.js'), 'client');
    api.add_files(path.join(asset_path, 'plugins', 'jquery.sparkline.min.js'), 'client');
    api.add_files(path.join(asset_path, 'plugins', 'jquery.pulsate.min.js'), 'client');
    

    

    
//imgs

 
  // fonts
  api.add_files(path.join(asset_path, 'fonts', 'DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff'), 'client');
  api.add_files(path.join(asset_path, 'font', 'cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff'), 'client');
  api.add_files(path.join(asset_path, 'font', 'MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff'), 'client');
  api.add_files(path.join(asset_path, 'font', 'k3k702ZOKiLJc3WVjuplzHhCUOGz7vYGh680lGh-uXM.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
});
