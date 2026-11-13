import { ipcMain } from 'electron'

/** Keep the preload API compatible while application updates are disabled. */
export function initAutoUpdater(): void {
  ipcMain.handle('update:get-status', () => null)
  ipcMain.handle('update:download', () => null)
  ipcMain.handle('update:install', () => null)
}
