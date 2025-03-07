# Changelog

The following is a list of notable changes to the Mantine ContextMenu component.  
Minor versions that are not listed in the changelog are minor bug fixes and small internal improvements or refactorings.

## 7.1.8 (2023-11-03)

- Fix package exports

## 7.1.7 (2023-11-03)

- Switch to `esm` export only, to fix this issue: https://github.com/icflorescu/mantine-datatable/issues/451  
  This is a potentially breaking change and I'm sorry to do it in a patch release, but the library needs to work with Next.js pages router

## 7.1.3 (2023-10-27)

- Add `hidden` prop to menu items, to allow conditional hiding

## 7.1.0 (2023-10-24)

- The first stable release of the V7.1 is here! 🎉
- The object returned by the `useContextMenu` hook now includes an `isContextMenuVisible` boolean property

## 7.0.0-alpha.6 (2023-10-19)

- **BREAKING CHANGE**: Change the types of `style` and `styles` properties to `MantineStyleProp` and `StylesRecord<'root' | 'item' | 'divider', MantineStyleProp>` respectively, to match Mantine's approach to styling
- **BREAKING CHANGE**: the `useContextMenu` hook now returns an object with `showContextMenu` and `hideContextMenu` functions instead of a function

## 7.0.0-alpha.4 (2023-10-19)

- Remove `borderRadius` and `shadow` from the options provided to `showContextMenu`, as customizing them through the `<ContextMenuProvider>` props should be enough
- Add a `submenuDelay` prop to the `<ContextMenuProvider>` component, to control the delay before a submenu is shown when hovering over a menu item that has a submenu
- Substantial improvements to the documentation website

## 7.0.0-alpha.1 (2023-10-16)

- The V7 alpha release is here! 🎉
- The V7 is a major rewrite of the library internals, with the following goals in mind:
  - **Mantine V7 compatibility** - switch the styling approach from CSS-in-JS to PostCSS (or PostCSS modules)
  - Make the repo easier to maintain by switching from a monorepo approach to a single-package that includes the source code, documentation and examples; this should also make it easier for new contributors to get started
  - Streamline the build process - switch from `esbuild` to plain `tsc` and `postcss` commands
  - Rewrite the entire documentation website to make use of Next.js app router and React Server Components; this should also ensure the package will work properly in such an environment

## 6.0.0 (2023-10-01)

- Bump version to `6.0.0` to match the compatible versions of `@mantine/hooks` and `@mantine/core`. From now on, we'll make sure to keep the major version of `mantine-contextmenu` in sync with the major version of Mantine core
- Implement submenus (nested context menus) support (see [#68](https://github.com/icflorescu/mantine-contextmenu/issues/68)), many thanks to @Corvimia for her contribution 🙏 (see [#69](https://github.com/icflorescu/mantine-contextmenu/pull/69))

## 1.3.14 (2023-08-11)

- Switch to `useResizeObserver` instead of `useElementSize` to properly take into account the padding and border when calculating the menu position

## 1.3.13 (2023-08-10)

- Lock `@mantine/core` and `@mantine/hooks` peer dependencies to `>=6 <=6.0.17 || >=6.0.19`, to avoid a [bug introduced in `6.0.18` and fixed in `6.0.19`](https://github.com/mantinedev/mantine/pull/4512)

## 1.3.3 (2023-06-30)

- Fix positioning regression introduced by using a Portal

## 1.3.2 (2023-06-29)

- Use a Portal to render the context menu

## 1.3.1 (2023-06-28)

- Relax peer dependencies (to Mantine 6.x)

## 1.3.0 (2023-06-23)

- Expose `ContextMenu`, `ContextMenuItem` and `ContextMenuDivider` components

## 1.2.3 (2023-04-29)

- Stop event propagation (fix issue #18)

## 1.1.0 (2023-04-11)

- Add custom content support

## 1.0.0 (2023-04-11)

- Initial release
