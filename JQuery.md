
### 1. **Selectors**

```html
<p class="text">Hello World</p>

<script>
  $(document).ready(function(){
    $(".text").css("color", "blue");
  });
</script>
```



### 2. **show()**

```html
<div style="display:none" id="box">This is a box</div>
<button id="showBtn">Show</button>

<script>
  $("#showBtn").click(function(){
    $("#box").show();
  });
</script>
```



### 3. **hide()**

```html
<div id="box">This is a box</div>
<button id="hideBtn">Hide</button>

<script>
  $("#hideBtn").click(function(){
    $("#box").hide();
  });
</script>
```



### 4. **toggle()**

```html
<div id="box">This is a box</div>
<button id="toggleBtn">Toggle</button>

<script>
  $("#toggleBtn").click(function(){
    $("#box").toggle();
  });
</script>
```



### 5. **fadeIn()**

```html
<div style="display:none" id="box">Fade In Example</div>
<button id="fadeInBtn">Fade In</button>

<script>
  $("#fadeInBtn").click(function(){
    $("#box").fadeIn();
  });
</script>
```



### 6. **fadeOut()**

```html
<div id="box">Fade Out Example</div>
<button id="fadeOutBtn">Fade Out</button>

<script>
  $("#fadeOutBtn").click(function(){
    $("#box").fadeOut();
  });
</script>
```



### 7. **fadeToggle()**

```html
<div id="box">Fade Toggle Example</div>
<button id="fadeToggleBtn">Fade Toggle</button>

<script>
  $("#fadeToggleBtn").click(function(){
    $("#box").fadeToggle();
  });
</script>
```



### 8. **slideUp()**

```html
<div id="box">Slide Up Example</div>
<button id="slideUpBtn">Slide Up</button>

<script>
  $("#slideUpBtn").click(function(){
    $("#box").slideUp();
  });
</script>
```



### 9. **slideDown()**

```html
<div style="display:none" id="box">Slide Down Example</div>
<button id="slideDownBtn">Slide Down</button>

<script>
  $("#slideDownBtn").click(function(){
    $("#box").slideDown();
  });
</script>
```



### 10. **slideToggle()**

```html
<div id="box">Slide Toggle Example</div>
<button id="slideToggleBtn">Slide Toggle</button>

<script>
  $("#slideToggleBtn").click(function(){
    $("#box").slideToggle();
  });
</script>
```



### 11. **animate()**

```html
<div id="box" style="width:100px;height:100px;background-color:red;"></div>
<button id="animateBtn">Animate</button>

<script>
  $("#animateBtn").click(function(){
    $("#box").animate({
      width: "200px",
      height: "200px",
      opacity: 0.5
    }, 1000);
  });
</script>
```


