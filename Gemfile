source 'https://rubygems.org'

gem 'jekyll', '~> 4.0.0'
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.12'
  gem 'jekyll-haml-markup'
  gem 'jekyll-seo-tag'
end

group :development do
  gem 'twitter'
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data'
end
