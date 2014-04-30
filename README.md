ScrollNaviJs
============

ScrollNaviJs is jquery plugin for fix navigation on top after scroll second section content, actually navigation fix in bottom of browser when we are in first section content


How to use
==========

- 1)Include jquery plugin and ScrollNaviJs
- 2)call scrollnavi function with navigation ID

```html
<script src="js/jquery.js"></script>
<script src="js/scroll_navi.js"></script>
<script>
  $(document).ready(function(){
    $("#nav").scroll_navi();
  });
</script>
```

- 3)put html code in body tag like below:
```html
<div id="nav">
            <div class="container">
            <ul>
                <li><a href="#section1">Section1</a></li>
                <li><a href="#section2">Section2</a></li>
                <li><a href="#section3">Section3</a></li>
            </ul>
            </div>
</div>
        <div id="section1">Section1</div>
        <div id="section2">Section2</div>
        <div id="section3">Section3</div>
```        

- 4)also put css fiel
```html
<link rel="stylesheet" type="text/css" href="css/scrollnavi.css">
```

- if you want to set scroll speed, then call method like below:
```html
$("#nav").scroll_navi(1500);
```
