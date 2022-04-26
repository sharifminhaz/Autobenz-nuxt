export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', href: 'img/logo/favicon.ico' },
			{ rel: 'stylesheet', href: 'css/bootstrap.min.css' },
			// { rel: 'stylesheet', href: 'css/owl.carousel.css' },
			// { rel: 'stylesheet', href: 'css/owl.transitions.css' },
			// { rel: 'stylesheet', href: 'css/animate.css' },
			// { rel: 'stylesheet', href: 'css/meanmenu.min.css' },
			// { rel: 'stylesheet', href: 'css/font-awesome.min.css' },
			// { rel: 'stylesheet', href: 'css/themify-icons.css' },
			// { rel: 'stylesheet', href: 'css/flaticon.css' },
			// { rel: 'stylesheet', href: 'css/venobox.css' },
			// { rel: 'stylesheet', href: 'css/magnific.min.css' },
			{ rel: 'stylesheet', href: 'css/style.css' },
			// { rel: 'stylesheet', href: 'css/responsive.css' },

			/* autobenz css */
			{ rel: 'stylesheet', href: 'css/auto/skins/midnight-blue.css' },
			{ rel: 'stylesheet', href: 'css/auto/bootstrap.min.css' },
			{ rel: 'stylesheet', href: 'css/auto/initial.css' },

			{ rel: 'stylesheet', href: 'fonts/font-awesome/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href: 'css/auto/animate.min.css' },
			{ rel: 'stylesheet', href: 'css/auto/bootstrap-submenu.css' },
			{ rel: 'stylesheet', href: 'css/auto/bootstrap-select.min.css' },
			{ rel: 'stylesheet', href: 'css/auto/magnific-popup.css' },
			{ rel: 'stylesheet', href: 'css/auto/leaflet.css' },
			{ rel: 'stylesheet', href: 'css/auto/map.css' },
			{ rel: 'stylesheet', href: 'fonts/flaticon/font/flaticon.css' },
			{ rel: 'stylesheet', href: 'fonts/linearicons/style.css' },
			{ rel: 'stylesheet', href: 'css/auto/jquery.mCustomScrollbar.css' },
			{ rel: 'stylesheet', href: 'css/auto/dropzone.css' },

			{ rel: 'stylesheet', href: 'css/auto/lightbox.min.css' },
			{ rel: 'stylesheet', href: 'css/auto/jnoty.css' },
			{ rel: 'stylesheet', href: 'css/auto/slick.css' },
			{ rel: 'stylesheet', href: 'css/auto/preloader.css' },

			{ rel: 'stylesheet', href: 'css/auto/downloads.css' },
			{ rel: 'stylesheet', href: 'css/auto/sidebar.css' },
			{ rel: 'stylesheet', href: 'css/auto/responsive.css' },
			{ rel: 'stylesheet', href: 'css/auto/ie10-viewport-bug-workaround.css' },
			{ rel: 'stylesheet', href: 'css/auto/initial.css' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700%7CUbuntu:300,400,700'
			},
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,300,700' }
		],
		script: [
			{ src: 'js/jquery/jquery-2.2.0.min.js' },
			{ src: 'js/jquery/jquery-3.2.1.slim.min.js' },
			{ src: 'js/jquery/jquery.countdown.js' },
			{ src: 'js/jquery/jquery.easing.1.3.js' },
			{ src: 'js/jquery/jquery.filterizr.js' },
			{ src: 'js/jquery/jquery.magnific-popup.min.js' },
			{ src: 'js/jquery/jquery.mb.YTPlayer.js' },
			{ src: 'js/jquery/jquery.mCustomScrollbar.concat.min.js' },
			{ src: 'js/jquery/jquery.min.js' },
			{ src: 'js/jquery/jquery.mousewheel.min.js' },
			{ src: 'js/jquery/jquery.scrollUp.js' },

			{ src: 'js/main.js' },

			{ src: 'js/bootstrap-select.min.js' },
			{ src: 'js/bootstrap-submenu.js' },
			{ src: 'js/bootstrap.bundle.min.js' },
			{ src: 'js/dropzone.js' },
			{ src: 'js/html5shiv.min.js' },
			{ src: 'js/ie-emulation-modes-warning.js' },
			{ src: 'js/ie8-responsive-file-warning.js' },
			{ src: 'js/ie10-viewport-bug-workaround.js' },
			{ src: 'js/jnoty.js' },
			{ src: 'js/leaflet-providers.js' },
			{ src: 'js/leaflet.js' },
			{ src: 'js/maps.js' },
			{ src: 'js/popper.min.js' },
			{ src: 'js/rangeslider.js' },
			{ src: 'js/respond.min.js' },
			{ src: 'js/sidebar.js' },
			{ src: 'js/slick.min.js' },
			{ src: 'js/wow.min.js' }
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [],
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
