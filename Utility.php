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
        $url  = str_replace( ABSPATH, '', $path );
        return esc_url_raw( site_url( $url ) );
    }
}