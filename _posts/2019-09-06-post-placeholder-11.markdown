---
layout: post
title:  "Back to the future"
date:   2019-09-06 22:14:14 -0300
category: react-posts
---

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