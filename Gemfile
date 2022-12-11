source 'https://rubygems.org'

gem 'jekyll', '~> 4.0'
group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-haml-markup'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
end

group :development do
  gem 'twitter'
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem 'tzinfo'
  gem 'tzinfo-data'
end
