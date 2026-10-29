# @owdproject/kit-nuxt-primevue

PrimeVue integration for OWD demo themes.

## Includes

- Nuxt module: installs `@primevue/nuxt-module` and registers `ConfirmDialog`
- Client plugin: `createDesktopDialogs` → core `DesktopDialogProvider`
- Optional explorer UI (`DesktopExplorer*`): Workspace, Toolbar, FileEntry, Frame, …

## Stacks

| Goal | `desktop.config` | Theme `installModule` | `package.json` peers |
|------|------------------|----------------------|----------------------|
| Kernel + theme only | no `module-fs` | — | `@owdproject/core` |
| PrimeVue dialogs only | no `module-fs` | `kit-nuxt-primevue` with `{ explorer: false }` | `core`, `kit-nuxt-primevue` |
| File explorer (PV) | `modules: ['@owdproject/module-nuxt-fs']` | `kit-nuxt-primevue` (default) | `core`, `module-fs`, `kit-nuxt-primevue` |

Headless explorer APIs (`useExplorerWindow`, DnD, `useExplorerStore`, …) live in **`@owdproject/module-nuxt-fs`**, not in core. ZenFS (`@zenfs/*`) is imported only inside `module-fs`.

## Usage

Dialogs + explorer (default):

```ts
await installModule('@owdproject/kit-nuxt-primevue')
```

Dialogs only (no `DesktopExplorer*`, no `module-fs` required):

```ts
await installModule('@owdproject/kit-nuxt-primevue', { explorer: false })
```

Mount theme-specific `<ConfirmDialog />` groups (`delete`, `about`, …) in your layout.

Themed file explorer also needs `@owdproject/module-nuxt-fs` in `desktop.config.ts` `modules` and in the app `package.json`.
