<?php
/**
 * Amarkal Core
 *
 * The core module of the Amarkal framework.
 *
 * @package   amarkal-core
 * @author    Askupa Software <hello@askupasoftware.com>
 * @link      https://github.com/askupasoftware/amarkal-core
 * @copyright 2017 Askupa Software
 */

// Prevent direct file access
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Prevent loading the library more than once
 */
if( defined( 'AMARKAL_CORE' ) ) return false;
define( 'AMARKAL_CORE', true );