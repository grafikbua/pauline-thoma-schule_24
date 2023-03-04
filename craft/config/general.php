<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,
    'generateTransformsBeforePageLoad' => true,

    // Make sure URL's are fine
    'convertFilenamesToAscii' => true,
    'limitAutoSlugsToAscii' => true,

    // The URI segment that tells Craft to load the control panel
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

    // The secure key Craft will use for hashing and encrypting data
    'securityKey' => App::env('SECURITY_KEY'),

    // Aliases to keep our Templates DRY
    'aliases' => [
        '@web' => App::env('SITE_URL'),
        '@assets' => App::env('SITE_URL').App::env('ASSETS_PATH'),

        // Volumes
        '@images_path' => App::env('IMAGES_PATH'),
        '@images_url' => App::env('SITE_URL').App::env('IMAGES_PATH'),
        '@images_root' => App::env('DOCUMENT_ROOT').App::env('IMAGES_PATH'),
        '@documents_path' => App::env('DOCUMENTS_PATH'),
        '@documents_url' => App::env('SITE_URL').App::env('DOCUMENTS_PATH'),
        '@documents_root' =>App::env('DOCUMENT_ROOT').App::env('DOCUMENTS_PATH'),
        '@theme_path' => App::env('THEME_PATH'),
        '@theme_url' => App::env('SITE_URL').App::env('THEME_PATH'),
        '@theme_root' =>App::env('DOCUMENT_ROOT').App::env('THEME_PATH'),
    ],

    // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode' => $isDev,

    // Whether administrative changes should be allowed
    'allowAdminChanges' => $isDev,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,

];
