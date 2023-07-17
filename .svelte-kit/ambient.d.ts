
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
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
	export const SHELL: string;
	export const LSCOLORS: string;
	export const SESSION_MANAGER: string;
	export const __ETC_PROFILE_DONE: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const XDG_CONFIG_DIRS: string;
	export const LESS: string;
	export const NIX_BUILD_CORES: string;
	export const NIX_GCROOT: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const LAST_EXIT_CODE: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const STRINGS: string;
	export const npm_package_private: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_argv: string;
	export const AWS_CLI_HISTORY_FILE: string;
	export const builder: string;
	export const npm_config_bin_links: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const NO_AT_BRIDGE: string;
	export const shellHook: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const phases: string;
	export const GST_PLUGIN_SYSTEM_PATH_1_0: string;
	export const NAUTILUS_4_EXTENSION_DIR: string;
	export const PWD: string;
	export const XDG_VIDEOS_DIR: string;
	export const NIX_PROFILES: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const TRACKER_CLI_SUBCOMMANDS_DIR: string;
	export const npm_config_save_prefix: string;
	export const npm_package_devDependencies_vite: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const npm_package_readmeFilename: string;
	export const CUPS_DATADIR: string;
	export const NIX_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const XAUTHORITY: string;
	export const CMD_DURATION_MS: string;
	export const TEMPDIR: string;
	export const XDG_PICTURES_DIR: string;
	export const system: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOST_PATH: string;
	export const TERMINAL: string;
	export const GJS_DEBUG_TOPICS: string;
	export const QT_STYLE_OVERRIDE: string;
	export const GDM_LANG: string;
	export const IN_NIX_SHELL: string;
	export const GI_TYPELIB_PATH: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const USERNAME: string;
	export const NIX_BINTOOLS: string;
	export const npm_config_version_git_tag: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const NIXOS_OZONE_WL: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_config_init_license: string;
	export const npm_package_version: string;
	export const KEYTIMEOUT: string;
	export const AWS_CREDENTIALS_FILE: string;
	export const WAYLAND_DISPLAY: string;
	export const cmakeFlags: string;
	export const GIO_EXTRA_MODULES: string;
	export const outputs: string;
	export const npm_config_version_commit_hooks: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const GIT_ASKPASS: string;
	export const XDG_MUSIC_DIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const LD: string;
	export const INVOCATION_ID: string;
	export const buildPhase: string;
	export const MANAGERPID: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const CHROME_DESKTOP: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const doCheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const npm_config_version_tag_prefix: string;
	export const YARN_WRAP_OUTPUT: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const AWS_CONFIG_FILE: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_mb: string;
	export const XDG_DESKTOP_PORTAL_DIR: string;
	export const LESS_TERMCAP_me: string;
	export const GTK_PATH: string;
	export const LESS_TERMCAP_md: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const strictDeps: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const VISUAL: string;
	export const TEMP: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const LESS_TERMCAP_ue: string;
	export const npm_config_version_git_sign: string;
	export const AWS_WEB_IDENTITY_TOKEN_FILE: string;
	export const npm_package_scripts_deploy: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const LESS_TERMCAP_us: string;
	export const npm_config_version_git_message: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LC_TELEPHONE: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const LOCALE_ARCHIVE: string;
	export const preferLocalBuild: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const GDM_X_SERVER_EXTRA_ARGS: string;
	export const QML2_IMPORT_PATH: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const MOZ_PLUGIN_PATH: string;
	export const npm_config__yuno_registry: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_strict_ssl: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const LC_TIME: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const npm_package_scripts_dev: string;
	export const AWS_SHARED_CREDENTIALS_FILE: string;
	export const KDEDIRS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const STRIP: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const dontAddDisableDepTrack: string;
	export const GDMSESSION: string;
	export const CC: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_CC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_license: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const QT_PLUGIN_PATH: string;
	export const npm_config_ignore_optional: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const NIX_HARDENING_ENABLE: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const npm_config_init_version: string;
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
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
		SHELL: string;
		LSCOLORS: string;
		SESSION_MANAGER: string;
		__ETC_PROFILE_DONE: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		XDG_CONFIG_DIRS: string;
		LESS: string;
		NIX_BUILD_CORES: string;
		NIX_GCROOT: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		mesonFlags: string;
		LAST_EXIT_CODE: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		STRINGS: string;
		npm_package_private: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_argv: string;
		AWS_CLI_HISTORY_FILE: string;
		builder: string;
		npm_config_bin_links: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		NO_AT_BRIDGE: string;
		shellHook: string;
		GPG_TTY: string;
		EDITOR: string;
		phases: string;
		GST_PLUGIN_SYSTEM_PATH_1_0: string;
		NAUTILUS_4_EXTENSION_DIR: string;
		PWD: string;
		XDG_VIDEOS_DIR: string;
		NIX_PROFILES: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		TRACKER_CLI_SUBCOMMANDS_DIR: string;
		npm_config_save_prefix: string;
		npm_package_devDependencies_vite: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		npm_package_readmeFilename: string;
		CUPS_DATADIR: string;
		NIX_PATH: string;
		SYSTEMD_EXEC_PID: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		XAUTHORITY: string;
		CMD_DURATION_MS: string;
		TEMPDIR: string;
		XDG_PICTURES_DIR: string;
		system: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOST_PATH: string;
		TERMINAL: string;
		GJS_DEBUG_TOPICS: string;
		QT_STYLE_OVERRIDE: string;
		GDM_LANG: string;
		IN_NIX_SHELL: string;
		GI_TYPELIB_PATH: string;
		doInstallCheck: string;
		HOME: string;
		USERNAME: string;
		NIX_BINTOOLS: string;
		npm_config_version_git_tag: string;
		SSH_ASKPASS: string;
		LANG: string;
		LC_PAPER: string;
		NIXOS_OZONE_WL: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_config_init_license: string;
		npm_package_version: string;
		KEYTIMEOUT: string;
		AWS_CREDENTIALS_FILE: string;
		WAYLAND_DISPLAY: string;
		cmakeFlags: string;
		GIO_EXTRA_MODULES: string;
		outputs: string;
		npm_config_version_commit_hooks: string;
		XDG_DOWNLOAD_DIR: string;
		NIX_STORE: string;
		TMPDIR: string;
		GIT_ASKPASS: string;
		XDG_MUSIC_DIR: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		LD: string;
		INVOCATION_ID: string;
		buildPhase: string;
		MANAGERPID: string;
		INIT_CWD: string;
		READELF: string;
		CHROME_DESKTOP: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		GJS_DEBUG_OUTPUT: string;
		doCheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		GNOME_SETUP_DISPLAY: string;
		npm_config_version_tag_prefix: string;
		YARN_WRAP_OUTPUT: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		AWS_CONFIG_FILE: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		LESS_TERMCAP_mb: string;
		XDG_DESKTOP_PORTAL_DIR: string;
		LESS_TERMCAP_me: string;
		GTK_PATH: string;
		LESS_TERMCAP_md: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		strictDeps: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TZDIR: string;
		AR: string;
		AS: string;
		VISUAL: string;
		TEMP: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		LESS_TERMCAP_ue: string;
		npm_config_version_git_sign: string;
		AWS_WEB_IDENTITY_TOKEN_FILE: string;
		npm_package_scripts_deploy: string;
		NIX_BUILD_TOP: string;
		NM: string;
		LESS_TERMCAP_us: string;
		npm_config_version_git_message: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		LC_TELEPHONE: string;
		npm_package_devDependencies_gh_pages: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		LOCALE_ARCHIVE: string;
		preferLocalBuild: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		GDM_X_SERVER_EXTRA_ARGS: string;
		QML2_IMPORT_PATH: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		MOZ_PLUGIN_PATH: string;
		npm_config__yuno_registry: string;
		XDG_RUNTIME_DIR: string;
		npm_config_strict_ssl: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		LC_TIME: string;
		XDG_DOCUMENTS_DIR: string;
		npm_package_scripts_dev: string;
		AWS_SHARED_CREDENTIALS_FILE: string;
		KDEDIRS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		STRIP: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		dontAddDisableDepTrack: string;
		GDMSESSION: string;
		CC: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_CC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_license: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		MAIL: string;
		npm_config_registry: string;
		QT_PLUGIN_PATH: string;
		npm_config_ignore_optional: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		RANLIB: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		NIX_HARDENING_ENABLE: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		npm_config_init_version: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
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
