const webpack = require('webpack');
export default {
	mode: 'universal',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'autobenz-nuxt',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			//External CSS libraries
			{ rel: 'stylesheet', href: 'css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: 'css/animate.min.css' },
			{ rel: 'stylesheet', href: 'css/bootstrap-submenu.css' },

			{ rel: 'stylesheet', href: 'css/bootstrap-select.min.css' },
			{ rel: 'stylesheet', href: 'css/magnific-popup.css' },
			{ rel: 'stylesheet', href: 'css/leaflet.css' },

			{ rel: 'stylesheet', href: 'css/map.css' },
			{ rel: 'stylesheet', href: 'fonts/font-awesome/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href: 'fonts/flaticon/font/flaticon.css' },

			{ rel: 'stylesheet', href: 'fonts/linearicons/style.css' },
			{ rel: 'stylesheet', href: 'css/jquery.mCustomScrollbar.css' },
			{ rel: 'stylesheet', href: 'css/dropzone.css' },

			{ rel: 'stylesheet', href: 'css/lightbox.min.css' },
			{ rel: 'stylesheet', href: 'css/jnoty.css' },
			{ rel: 'stylesheet', href: 'css/slick.css' },

			{ rel: 'stylesheet', href: 'css/preloader.css' },
			{ rel: 'stylesheet', href: 'css/downloads.css' },
			//Custom stylesheet
			{ rel: 'stylesheet', href: 'css/sidebar.css' },
			{ rel: 'stylesheet', href: 'css/style.css' },
			{ rel: 'stylesheet', href: 'css/responsive.css' },
			{ rel: 'stylesheet', href: 'css/initial.css' },
			{ rel: 'stylesheet', href: 'css/skins/midnight-blue.css' },
			//Favicon icon
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

			//Google fonts
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700%7CUbuntu:300,400,700'
			},
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,300,700' },

			//IE10 viewport hack for Surface/desktop Windows 8 bug
			{ rel: 'stylesheet', href: 'css/ie10-viewport-bug-workaround.css' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css

	css: [ '~/node_modules/bootstrap/dist/css/bootstrap.css' ],

	script: [
		{ src: 'js/app.js' },
		{ src: 'js/aos.js' },
		{ src: 'js/bootstrap-select.min.js' },
		{ src: 'js/bootstrap-submenu.js' },
		{ src: 'js/dropzone.js' },
		{ src: 'js/form-wizard-steps.js' },
		{ src: 'js/html5shiv.min.js' },
		{ src: 'js/ie-emulation-modes-warning.js' },
		{ src: 'js/ie8-responsive-file-warning.js' },
		{ src: 'js/jarallax.min.js' },
		{ src: 'js/jnoty.js' },
		{ src: 'js/jquery-2.2.0.min.js' },
		{ src: 'js/jquery-3.2.1.slim.min.js' },
		{ src: 'js/jquery.countdown.js' },
		{ src: 'js/jquery.easing.1.3.js' },
		{ src: 'js/jquery.filterizr.js' },
		{ src: 'js/jquery.magnific-popup.min.js' },
		{ src: 'js/jquery.mb.YTPlayer.js' },
		{ src: 'js/jquery.mCustomScrollbar.concat.min.js' },
		{ src: 'js/jquery.min.js' },
		{ src: 'js/jquery.mousewheel.min.js' },
		{ src: 'js/jquery.odometer.min.js' },
		{ src: 'js/jquery.scrollUp.js' },
		{ src: 'js/leaflet-providers.js' },
		{ src: 'js/leaflet.js' },
		{ src: 'js/leaflet.markercluster.js' },
		{ src: 'js/lightgallery-all.js' },
		{ src: 'js/maps.js' },
		{ src: 'js/popper.min.js' },
		{ src: 'js/rangeslider.js' },
		{ src: 'js/readmore.js' },
		{ src: 'js/respond.min.js' },
		{ src: 'js/sidebar.js' },
		{ src: 'js/slick.min.js' },
		{ src: 'js/wow.min.js' }
		/*
		{ src: 'js/owl.carousel.min.js' },
		{ src: 'js/jquery.counterup.min.js' },
		{ src: 'js/waypoints.js' },
		{ src: 'js/magnific.min.js' },
		{ src: 'js/wow.min.js' },
		{ src: 'js/venobox.min.js' },
		{ src: 'js/jquery.meanmenu.js' },
		{ src: 'js/form-validator.min.js' },
		{ src: 'js/plugins.js' }
    */
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [ '~plugins/bootstrap.js' ],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		vendor: [ 'jquery', 'bootstrap' ],
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery'
			})
		],
		/*
    ** Run ESLint on save
    */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
