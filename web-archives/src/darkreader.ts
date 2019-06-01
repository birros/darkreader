import {createOrUpdateDynamicTheme, removeDynamicTheme} from '../../src/inject/dynamic-theme';
import ThemeEngines from '../../src/generators/theme-engines';

declare global {
    let darkreader_default: any;
}

var enabled = false;

if (darkreader_default !== undefined && darkreader_default) {
    enable ();
}

export function enable () {
    if (enabled === true) {
        return;
    } else {
        enabled = true;
    }

    const data = {
        /**
         * Default from `src/background/user-storage.ts`
         */
        filter:{
            mode: 1,
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            sepia: 0,
            useFont: false,
            fontFamily: 'Open Sans',
            textStroke: 0,
            engine: ThemeEngines.dynamicTheme,
            stylesheet: '',
        },
        fixes: {
            /**
             * Only for wikipedia.org
             * see `src/config/dynamic-theme-fixes.config`
             */
            url: [],
            invert: [
                '.mwe-math-element',
                '.mw-wiki-logo'
            ],
            css: ''
        },
        isIFrame: false
    };

    const { filter, fixes, isIFrame } = data;
    createOrUpdateDynamicTheme(filter, fixes, isIFrame);
}

export function disable () {
    if (enabled === false) {
        return;
    } else {
        enabled = false;
    }
    removeDynamicTheme();
}