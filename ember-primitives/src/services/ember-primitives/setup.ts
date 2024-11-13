/* eslint-disable @typescript-eslint/no-explicit-any */
import Service from '@ember/service';

/**
 * @internal
 */
export const PRIMITIVES = Symbol.for('ember-primitives-globals');

export default class EmberPrimitivesSetup extends Service {
  /**
   * Sets up required features for accessibility.
   */
  setup = async ({
    tabster,
    setTabsterRoot,
  }: {
    /**
     * Let this setup function initalize tabster.
     * https://tabster.io/docs/core
     *
     * This should be done only once per application as we don't want
     * focus managers fighting with each other.
     *
     * Defaults to `true`,
     *
     * Will fallback to an existing tabster instance automatically if `getTabster` returns a value.
     */
    tabster?: boolean;
    setTabsterRoot?: boolean;
  } = {}) => {
    tabster ??= true;
    setTabsterRoot ??= true;

    if (!tabster) {
      return;
    }

    const { createTabster, getTabster } = await import('tabster');
    let existing = getTabster(window);

    await this.#setupTabster(existing ?? createTabster(window));

    if (setTabsterRoot) {
      document.body.setAttribute('data-tabster', '{ "root": {} }');
    }
  };

  #setupTabster = async (tabster: ReturnType<typeof createTabster>) => {
    const { getMover, getDeloser } = await import('tabster');

    getMover(tabster);
    getDeloser(tabster);
  };
}
