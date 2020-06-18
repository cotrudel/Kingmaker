## Kingmaker on VueJS

This is a fork of the original Kingmaker project at [daviddechaux/Kingmaker](https://github.com/daviddechaux/Kingmaker). 
Our goal it to move it over to a Laravel/VueJS framework, in order to more easily segment all of its functionality.

The old files are currently available at `/public/old` and can be accessed via the path `/old/index.html`. 
These will eventually be removed as they are integrated into the full project.

## Installation

Installation requires the usual setup for a Laravel project, some of which is reiterated below.

+ Copy .env.example to .env
+ Set up a new database and add its variables to the .env file
+ Run `composer install` from the command prompt
+ Run `php artisan migrate` from the command prompt
+ Run `php artisan key:generate` from the command prompt