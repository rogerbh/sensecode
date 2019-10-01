---
layout: post
title:  "Resizing Columns with css and js.\n
A flexbox aproach."
date:   2019-09-01 09:14:14 -0300
category: js-posts
---

## This is just a test to check how the markdown format handles some text styling.

Uh, Lorraine. How did you know I was here? I don't wanna know your name. I don't wanna know anything anything about you. Let's put him in there. Remember, fellas, the future is in your hands. If you believe in progress, re-elect Mayor Red Thomas, progress is his middle name. Mayor Red Thomas's progress platform means more jobs, better education, bigger civic improvements, and lower taxes. On election day, cast your vote for a proven leader, re-elect Mayor Red Thomas... Whoa, wait, Doc.

Great good, good, Lorraine, I had a feeling about you two. George, aren't you gonna kiss me? Huh? No, Biff, you leave her alone. Flux capacitor.

Yeah well, I saw it on a rerun. Can I go now, Mr. Strickland? Believe me, Marty, you're better off not having to worry about all the aggravation and headaches of playing at that dance. Okay Doc, this is it. Now, of course not, Biff, now, I wouldn't want that to happen.

{% highlight css %}
    p { color: red }
    
    .some-class{
      text-align:left;
      font-size:16px;
    }
{% endhighlight %}

{% highlight js %}
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
{% endhighlight %}
