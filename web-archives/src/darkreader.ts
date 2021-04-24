import {createOrUpdateDynamicTheme, removeDynamicTheme} from '../../src/inject/dynamic-theme';
import { DEFAULT_THEME } from '../../src/defaults'

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
        filter: DEFAULT_THEME,
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
            css: '',
            ignoreInlineStyle: [],
            ignoreImageAnalysis: []
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
