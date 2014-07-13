require 'rubygems'
require 'bundler'
Bundler.require(:default)
require 'sass/plugin/rack'
require './app'

run SinatraBootstrap

# use coffeescript for javascript
use Rack::Coffee, root: 'public', urls: '/javascripts'