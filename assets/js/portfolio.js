// Live bits of the home page: Stack Overflow reputation and the latest posts from the blog, ror.tips and kamal.wiki feeds.
(function () {
  function compact(n) {
    if (n >= 1000) return (Math.floor(n / 100) / 10).toString().replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function setStat(name, html) {
    var el = document.querySelector('[data-stat="' + name + '"]');
    if (el) el.innerHTML = html;
  }

  function loadStackOverflow() {
    fetch('https://api.stackexchange.com/2.3/users/4758119?site=stackoverflow')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var user = data.items && data.items[0];
        if (!user) return;
        setStat('so-reputation', compact(user.reputation));
      })
      .catch(function () {}); // keep the static fallback
  }

  function parseFeed(xml, feed) {
    var doc = new DOMParser().parseFromString(xml, 'application/xml');
    return Array.prototype.map.call(doc.querySelectorAll('entry'), function (entry) {
      var link = entry.querySelector('link[rel="alternate"]') || entry.querySelector('link');
      return {
        site: feed,
        title: entry.querySelector('title').textContent,
        url: link.getAttribute('href'),
        date: new Date(entry.querySelector('published, updated').textContent)
      };
    });
  }

  function card(post) {
    var a = document.createElement('a');
    a.className = 'writing__card';
    a.href = post.url;
    a.dataset.site = post.site.key;
    [['writing__site', post.site.name],
     ['writing__title', post.title],
     ['writing__date', post.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })]
    ].forEach(function (part) {
      var span = document.createElement('span');
      span.className = part[0];
      span.textContent = part[1];
      a.appendChild(span);
    });
    return a;
  }

  function fallback(grid, feeds) {
    grid.innerHTML = '';
    feeds.forEach(function (feed) {
      grid.appendChild(card({ site: feed, title: 'Read the latest on ' + feed.name, url: feed.url.replace(/feed\.xml$/, ''), date: new Date() }));
    });
    Array.prototype.forEach.call(grid.querySelectorAll('.writing__date'), function (d) { d.remove(); });
  }

  function loadWriting() {
    var grid = document.querySelector('.writing__grid');
    if (!grid) return;
    var feeds = JSON.parse(grid.dataset.feeds);
    var limit = parseInt(grid.dataset.limit, 10) || 6;
    var now = new Date();

    Promise.all(feeds.map(function (feed) {
      return fetch(feed.url)
        .then(function (r) { return r.ok ? r.text() : ''; })
        .then(function (xml) { return xml ? parseFeed(xml, feed) : []; })
        .catch(function () { return []; });
    })).then(function (lists) {
      var posts = [].concat.apply([], lists)
        .filter(function (p) { return p.date <= now; })
        .sort(function (a, b) { return b.date - a.date; })
        .slice(0, limit);
      if (!posts.length) return fallback(grid, feeds);
      grid.innerHTML = '';
      posts.forEach(function (p) { grid.appendChild(card(p)); });
    });
  }

  loadStackOverflow();
  loadWriting();
})();
