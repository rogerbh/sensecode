---
layout: post
title:  "Resizing Columns with css and js.\n
A flexbox aproach."
#date:   2017-08-28 22:14:14 -0300
category: css-posts
---
This post is for those who would like to implement a column resizer to their websites. Something similar to the panels in [jsfiddle.net](http://jsfiddle.net/)

<pre>
  <code class="language-css">
    p { color: red }
    
    .some-class{
      text-align:left;
      font-size:16px;
    }
  </code>
</pre>

<pre>
<code class="lang-javascript">
  var isResizingCols = false,
            isResizingMt = false,
            isResizingBm = false;

  $(function () {
    var flexBasisVal;
    var container = $('.flex-container'),
        left = $('.flex-left-col'),
        right = $('.flex-right-col'),
        handle = $('#drag'),
        handleMt = $('.dragMt'),
        handleBm = $('.dragBm'),
        fT = $('.flex-top'),
        fM = $('.flex-middle'),
        fB = $('.flex-bottom');

    handle.on('mousedown', function (e) {
        e.preventDefault();
        isResizingCols = true;
        isResizingMt = false;
        isResizingBm = false;

        $('<div id="dragMask"></div>').css('left', $('.flex-right-col').offset().left).appendTo('.flex-right-col');

    });

    handleMt.on('mousedown', function (e) {
        e.preventDefault();
        isResizingCols = false;
        isResizingMt = true;
        isResizingBm = false;

        $('<div class="drag-rows"></div>').css('top', $('.flex-middle').offset().top).appendTo('.flex-middle');

    });

    handleBm.on('mousedown', function (e) {
        e.preventDefault();
        isResizingCols = false;
        isResizingMt = false;
        isResizingBm = true;

        $('<div class="drag-rows"></div>').css('top', $('.flex-bottom').offset().top).appendTo('.flex-bottom');

    });

    $(document).on('mousemove', function (e) {
        e.preventDefault();
        // não fazer nada quando não estiver redimensionando
        if (!isResizingCols && !isResizingMt && !isResizingBm)
            return;

        if (isResizingCols) {

            if (((e.clientX / $('.flex-container').width()) * 100 >= 20) &&
                ((e.clientX / $('.flex-container').width()) * 100 <= 80))
                flexBasisVal = (e.clientX / $('.flex-container').width()) * 100;

            $('#dragMask').css({ 'left': e.clientX });
        }
        else if (isResizingMt || isResizingBm) {
            $('.drag-rows').css({ 'top': e.clientY });
            flexBasisHeightVal = (e.clientY / $('.flex-container').height()) * 100;
        }

    }).on('mouseup', function (e) {
        $('.drag-rows').remove();
        if (isResizingCols) {
            $('#dragMask').remove();
            left.animate({ 'flex-basis': (flexBasisVal) + '%' }, 100);
            right.animate({ 'flex-basis': (100 - flexBasisVal) + '%' }, 100);
        }

        if (isResizingMt) {
            fB.css({
                'flex-grow': 1,
                'flex-shrink': 1
            });
            fT.animate({ 'flex-shrink': 1, 'flex-grow': 1, 'flex-basis': (flexBasisHeightVal) + '%' }, 100);
            fM.animate({ 'flex-shrink': 1, 'flex-grow': 1, 'flex-basis': ((100 - flexBasisHeightVal) - parseInt(fB.css('flex-basis').slice(0, -1))) + '%' }, 100);
        }
        else if (isResizingBm) {
            fT.css({
                'flex-grow': 1,
                'flex-shrink': 1
            });
            fM.animate({ 'flex-shrink': 1, 'flex-grow': 1, 'flex-basis': (flexBasisHeightVal) + '%' }, 100);
            fB.animate({ 'flex-shrink': 1, 'flex-grow': 1, 'flex-basis': ((100 - flexBasisHeightVal) - parseInt(fT.css('flex-basis').slice(0, -1))) + '%' }, 100);
        }

        // parar o redimensionamento
        setTimeout(function () {
            isResizingCols = false;
            isResizingMt = false;
            isResizingBm = false;
            console.log('left col now is: ' + left.css('flex-basis') + ' & ' + 'right col now is: ' + right.css('flex-basis') + ' is resizing: ' + isResizingCols);
        }, 110);
    });
        });            
</code>
</pre>

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
