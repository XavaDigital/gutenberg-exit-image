<?php
/**
 * Plugin Name:       Exit Image
 * Plugin URI:        https://xavadigital.com
 * Description:       An image block with random exit animation on click
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Xava Digital
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       exit-image
 *
 * @package           exit-image
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function exit_image_exit_image_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'exit_image_exit_image_block_init' );

function exit_image_block_scripts() {
	// $sharedBlockPath = '/src/rolldice.js';
	//$info = include plugin_dir_path(__FILE__) . "/js/rolldice.asset.php";
  // Enqueue frontend and editor JS
  wp_enqueue_script(
	'exit_image-script',
	plugin_dir_url(__FILE__) . "src/js/script.js",
	array( 'jquery', 'wp-element', 'wp-components', 'wp-i18n'),
	'1.0.0'
  );

}

// // Hook scripts function into block editor hook
//add_action( 'enqueue_block_assets', 'exit_image_block_scripts' );

add_action( 'init' ,'exit_image_block_scripts' );
//add_action( 'wp_enqueue_scripts' ,'exit_image_block_scripts' );
