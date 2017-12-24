# amarkal-core [![Build Status](https://scrutinizer-ci.com/g/amarkal/amarkal-core/badges/build.png?b=master)](https://scrutinizer-ci.com/g/amarkal/amarkal-core/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/amarkal/amarkal-core/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/amarkal/amarkal-core/?branch=master) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) [![Amarkal Powered](https://askupasoftware.com/amarkal-powered.svg)](https://products.askupasoftware.com/amarkal) [![License](https://img.shields.io/badge/license-GPL--3.0%2B-red.svg)](https://raw.githubusercontent.com/amarkal/amarkal-core/master/LICENSE)
The core module of the Amarkal framework.

**Tested up to:** WordPress 4.7  
**Dependencies**: none

## overview

This module is used internally by other Amarkal modules. It contains has classes and functions that other modules commonly use.

## Installation

### Via Composer

If you are using the command line:  
```
$ composer require askupa-software/amarkal-core:dev-master
```

Or simply add the following to your `composer.json` file:
```javascript
"require": {
     "askupa-software/amarkal-core": "dev-master"
 }
```
And run the command 
```
$ composer install
```

This will install the package in the directory `vendors/askupa-software/amarkal-core`.  
Now all you need to do is include the composer autoloader.

```php
require_once 'path/to/vendor/autoload.php';
```

### Manually

[Download the package](https://github.com/amarkal/amarkal-core/archive/master.zip) from github and include `bootstrap.php` in your project.

```php
require_once 'path/to/amarkal-core/bootstrap.php';
```