
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const OBERD_TWILIO_SID: string;
	export const ELASTICSEARCH_QA_URL: string;
	export const OBERD_TEST_EMAIL: string;
	export const CACHET_API_PASSWORD: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_svelte_sequential_preprocessor: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const RACKSPACE_API_KEY: string;
	export const NODE: string;
	export const DEBUG_DO_NOT_COMPLETE: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const GOOGLE_MAPS_STATIC_API_SECRET: string;
	export const RAVEN_EMAIL_OVERRIDE: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const GARMIN_CONNECT_CONSUMER_KEY: string;
	export const TMPDIR: string;
	export const OBERD_DEV_ROOT: string;
	export const npm_package_scripts_lint: string;
	export const TERM_PROGRAM_VERSION: string;
	export const OBERD_TWILIO_TOKEN: string;
	export const npm_package_scripts_dev: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const MYSQL_QA_URL: string;
	export const OBERD_SDK_DNS_SUFFIX: string;
	export const npm_package_devDependencies__threlte_extras: string;
	export const HODOR_ENDPOINT: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const npm_package_devDependencies_postprocessing: string;
	export const N_PREFIX: string;
	export const USER: string;
	export const OBERD_TWILIO_PUSH_NOTIFICATION_SERVICE_ID: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_fp_ts: string;
	export const COMMAND_MODE: string;
	export const PROMIS_URL: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const MYSQL_MEDAMINE_URL: string;
	export const npm_config_strict_peer_dependencies: string;
	export const OBERD_GOOGLE_CLIENT_ID: string;
	export const SSH_AUTH_SOCK: string;
	export const GARMIN_CONNECT_CONSUMER_SECRET: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_postcss: string;
	export const MOUNTAIN_OAUTH_SECRET: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__threlte_theatre: string;
	export const npm_package_devDependencies_svelte: string;
	export const LOCAL_HODOR_SEND_OVERRIDE: string;
	export const HODOR_PASSWORD: string;
	export const npm_package_devDependencies__threlte_preprocess: string;
	export const STD_COMMIT_MSG: string;
	export const PLOTLY_USERNAME: string;
	export const OBERD_TO_PERSON_EMAIL_KEY: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const GITHUB_OAUTH_TOKEN: string;
	export const LaunchInstanceID: string;
	export const npm_package_devDependencies__tailwindcss_aspect_ratio: string;
	export const npm_config_engine_strict: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const MOUNTAIN_OAUTH_CLIENT: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const VERBOSE: string;
	export const npm_package_scripts_preview: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const NPM_OAUTH_TOKEN: string;
	export const npm_config_resolution_mode: string;
	export const NODE_PATH: string;
	export const AWS_REGION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte_kbc: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const SIP_TRUNK: string;
	export const OBERD_GOOGLE_SECRET: string;
	export const GARMIN_PASSWORD_NATHAN: string;
	export const OBERD_DNS_HOST: string;
	export const XPC_FLAGS: string;
	export const KICKBOX_API_KEY: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const RACKSPACE_USER: string;
	export const PROMIS_SECRET: string;
	export const ELASTICSEARCH_PROD_URL: string;
	export const npm_package_devDependencies__dimforge_rapier3d_compat: string;
	export const npm_package_devDependencies__theatre_core: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const VSCODE_INJECTION: string;
	export const QC2_CONFIG_BUCKET: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_three: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const npm_package_devDependencies__threlte_core: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const SIP_USER: string;
	export const npm_package_devDependencies__threlte_rapier: string;
	export const MAILGUN_API_KEY: string;
	export const npm_package_devDependencies__theatre_studio: string;
	export const PLOTLY_APIKEY: string;
	export const DOCUMENT_PARSER_SECRET: string;
	export const GOOGLE_MAPS_STATIC_API_KEY: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies__types_three: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_devDependencies_svelte_loading_spinners: string;
	export const OBERD_DIR: string;
	export const DOCUMENT_PARSER_SERVICE: string;
	export const GOPATH: string;
	export const PROMIS_USER: string;
	export const PROMIS_FHIR_CLIENT_ID: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const GOOGLE_CLOUD_KEY: string;
	export const AO_SURGERY_REFERENCE_API_KEY: string;
	export const SIP_KEY: string;
	export const OBERD_RESPONSE_KEY: string;
	export const SECURITYSESSIONID: string;
	export const NODE_EXTRA_CA_CERTS: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		OBERD_TWILIO_SID: string;
		ELASTICSEARCH_QA_URL: string;
		OBERD_TEST_EMAIL: string;
		CACHET_API_PASSWORD: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_svelte_sequential_preprocessor: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		RACKSPACE_API_KEY: string;
		NODE: string;
		DEBUG_DO_NOT_COMPLETE: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		TERM: string;
		GOOGLE_MAPS_STATIC_API_SECRET: string;
		RAVEN_EMAIL_OVERRIDE: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		GARMIN_CONNECT_CONSUMER_KEY: string;
		TMPDIR: string;
		OBERD_DEV_ROOT: string;
		npm_package_scripts_lint: string;
		TERM_PROGRAM_VERSION: string;
		OBERD_TWILIO_TOKEN: string;
		npm_package_scripts_dev: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		MYSQL_QA_URL: string;
		OBERD_SDK_DNS_SUFFIX: string;
		npm_package_devDependencies__threlte_extras: string;
		HODOR_ENDPOINT: string;
		npm_package_private: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		npm_package_devDependencies_postprocessing: string;
		N_PREFIX: string;
		USER: string;
		OBERD_TWILIO_PUSH_NOTIFICATION_SERVICE_ID: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_fp_ts: string;
		COMMAND_MODE: string;
		PROMIS_URL: string;
		PNPM_SCRIPT_SRC_DIR: string;
		MYSQL_MEDAMINE_URL: string;
		npm_config_strict_peer_dependencies: string;
		OBERD_GOOGLE_CLIENT_ID: string;
		SSH_AUTH_SOCK: string;
		GARMIN_CONNECT_CONSUMER_SECRET: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_postcss: string;
		MOUNTAIN_OAUTH_SECRET: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		npm_package_devDependencies__threlte_theatre: string;
		npm_package_devDependencies_svelte: string;
		LOCAL_HODOR_SEND_OVERRIDE: string;
		HODOR_PASSWORD: string;
		npm_package_devDependencies__threlte_preprocess: string;
		STD_COMMIT_MSG: string;
		PLOTLY_USERNAME: string;
		OBERD_TO_PERSON_EMAIL_KEY: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		GITHUB_OAUTH_TOKEN: string;
		LaunchInstanceID: string;
		npm_package_devDependencies__tailwindcss_aspect_ratio: string;
		npm_config_engine_strict: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		MOUNTAIN_OAUTH_CLIENT: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		VERBOSE: string;
		npm_package_scripts_preview: string;
		AWS_SECRET_ACCESS_KEY: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		NPM_OAUTH_TOKEN: string;
		npm_config_resolution_mode: string;
		NODE_PATH: string;
		AWS_REGION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte_kbc: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		SIP_TRUNK: string;
		OBERD_GOOGLE_SECRET: string;
		GARMIN_PASSWORD_NATHAN: string;
		OBERD_DNS_HOST: string;
		XPC_FLAGS: string;
		KICKBOX_API_KEY: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		RACKSPACE_USER: string;
		PROMIS_SECRET: string;
		ELASTICSEARCH_PROD_URL: string;
		npm_package_devDependencies__dimforge_rapier3d_compat: string;
		npm_package_devDependencies__theatre_core: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		VSCODE_INJECTION: string;
		QC2_CONFIG_BUCKET: string;
		AWS_ACCESS_KEY_ID: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_three: string;
		SHLVL: string;
		HOME: string;
		npm_package_type: string;
		npm_package_devDependencies__threlte_core: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		SIP_USER: string;
		npm_package_devDependencies__threlte_rapier: string;
		MAILGUN_API_KEY: string;
		npm_package_devDependencies__theatre_studio: string;
		PLOTLY_APIKEY: string;
		DOCUMENT_PARSER_SECRET: string;
		GOOGLE_MAPS_STATIC_API_KEY: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies__types_three: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_devDependencies_svelte_loading_spinners: string;
		OBERD_DIR: string;
		DOCUMENT_PARSER_SERVICE: string;
		GOPATH: string;
		PROMIS_USER: string;
		PROMIS_FHIR_CLIENT_ID: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		GOOGLE_CLOUD_KEY: string;
		AO_SURGERY_REFERENCE_API_KEY: string;
		SIP_KEY: string;
		OBERD_RESPONSE_KEY: string;
		SECURITYSESSIONID: string;
		NODE_EXTRA_CA_CERTS: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
