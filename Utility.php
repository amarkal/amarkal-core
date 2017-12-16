<?php

namespace Amarkal\Core;

/**
 * A set of utility functions commonly use by other Amarkal modules.
 */
class Utility
{
    /**
     * Convert the given path to a URL.
     * 
     * @param string $path
     * @return string
     */
    static function path_to_url( $path )
    {
        // We are replacing DIRECTORY_SEPARATOR with forward slash here 
        // to avoid issues in Windows systems
        $path    = str_replace( DIRECTORY_SEPARATOR, '/', $path);
        $abspath = str_replace( DIRECTORY_SEPARATOR, '/', ABSPATH);
        $url     = str_replace( $abspath, '', $path );

        return esc_url_raw( site_url( $url ) );
    }
}