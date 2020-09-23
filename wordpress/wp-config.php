<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_boticelli' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'YYw==y2W%GJ4:<:j7uJS#{j:=wXd6X*I-OZezO!(PUeK^v:l_DfJ>ngoWQ@5*Av<' );
define( 'SECURE_AUTH_KEY',  'Zf=t4k1OjJ1bn#XYCx~Ok)dm{${o+HVErWXR>P*p5Nh5En)_#]A-.Z}D4,iW1cm=' );
define( 'LOGGED_IN_KEY',    '@3[Rr[oLH.06mkg>_HszM&NLP%ji&-=Szvzse0DTQ.)G#m[.:8+Pk:!{9FCxY-&p' );
define( 'NONCE_KEY',        '^*v|htV*@2`pVS&.[hn|Z)j/HrUn_[uGl*0U@$[id+|+hO_:k0LYRtZFQ5Y?she]' );
define( 'AUTH_SALT',        ';H,a#~}mDlYJ&R:+PuP3$^(A_F19_K$<DpbNIIg<fUV3Z*MXsmm`_AU)EE/glW!S' );
define( 'SECURE_AUTH_SALT', '@jR7oMkWC<K-3!Zkzb/$ScCaFMd6YEI:,ZvxeEN=nXU*<F9?UnrP8<`4%`1WM.<B' );
define( 'LOGGED_IN_SALT',   'WhKXn!6@#nwh06k]igM`WjDC>+GVmqkN-2oIl,4XA87}mMGM0#FuuLO!R`k*-ZMf' );
define( 'NONCE_SALT',       'JnoCT]r#f:<Sc*{RD6w/%PGG=b75,cpr7eNuP+=}Y94Pxe4J!&Y>yPu FZ-I_{a*' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
