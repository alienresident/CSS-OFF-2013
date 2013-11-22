WebFontConfig = {
  google: { families: [ 'Lato:100,400,700:latin', 'Lora:700,700italic:latin', 'Merriweather:400,300,900:latin', 'Oswald::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})(); 