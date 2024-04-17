import * as docsSupport from 'docs-app/docs-support';
import * as docsMarkdown from 'docs-app/markdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as eFocusTrap from 'ember-focus-trap';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as emberFocusTrap from 'ember-focus-trap/modifiers/focus-trap';
import * as emberHeadlessForm from 'ember-headless-form';
import * as eModifier from 'ember-modifier';
// ember-primitives (this library! yay!)
import * as emberPrimitives from 'ember-primitives';
import * as colorScheme from 'ember-primitives/color-scheme';
import * as floatingUI from 'ember-primitives/floating-ui';
// ember-resources
import * as emberResources from 'ember-resources';
// other
import * as loremIpsum from 'lorem-ipsum';
import * as remoteData from 'reactiveweb/remote-data';
import * as trackedBuiltIns from 'tracked-built-ins';

import type { Options } from './compiler';

export const defaultOptions: Options = {
  format: 'glimdown',
  importMap: {
    'ember-primitives/floating-ui': floatingUI,
    'ember-primitives': emberPrimitives,
    'ember-primitives/color-scheme': colorScheme,
    'ember-headless-form': emberHeadlessForm,
    'ember-resources': emberResources,
    'reactiveweb/remote-data': remoteData,
    'ember-focus-trap/modifiers/focus-trap': emberFocusTrap,
    'ember-focus-trap': eFocusTrap,
    'tracked-built-ins': trackedBuiltIns,
    'docs-app/docs-support': docsSupport,
    'docs-app/markdown': docsMarkdown,
    'lorem-ipsum': loremIpsum,
    'ember-modifier': eModifier,
  },
};
