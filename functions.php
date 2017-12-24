<?php
/**
 * Amarkal Core
 *
 * The core module of the Amarkal framework.
 *
 * @package   amarkal-core
 * @author    Askupa Software <hello@askupasoftware.com>
 * @link      https://github.com/amarkal/amarkal-core
 * @copyright 2017 Askupa Software
 */

// Prevent direct file access
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Prevent loading the library more than once
 */
if( defined( 'AMARKAL_CORE' ) ) return false;
define( 'AMARKAL_CORE', true );

if(!function_exists('amarkal_core_enqueue_scripts'))
{
    /**
     * Enqueue Amarkal Core styles & scripts.
     */
    function amarkal_core_enqueue_scripts()
    {
        \wp_enqueue_script('amarkal-core',Amarkal\Core\Utility::path_to_url(__DIR__.'/assets/js/dist/amarkal-core.min.js'),array('jquery'),false,true);
        \wp_enqueue_style('amarkal-core',Amarkal\Core\Utility::path_to_url(__DIR__.'/assets/css/dist/amarkal-core.min.css'),array());
    }
    \add_action('admin_init','amarkal_core_enqueue_scripts');
}