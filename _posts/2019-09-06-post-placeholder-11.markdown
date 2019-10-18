---
layout: post
title:  "Back to the future"
date:   2019-09-06 22:14:14 -0300
category: react-posts
---

I guess you guys aren't ready for that yet. But your kids are gonna love it. I followed you. Please, Marty, don't tell me, no man should know too much about their own destiny.

{% highlight javascript %}
...
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  ...
{% endhighlight %}