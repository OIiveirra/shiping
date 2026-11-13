const { test } = require('node:test')
const assert = require('node:assert/strict')
const load = require('./load-source.cjs')

test('update status, download and installation stay disabled', async () => {
  const handlers = new Map()
  const ipcMain = { handle: (channel, handler) => handlers.set(channel, handler) }
  const electron = new Proxy(
    { ipcMain },
    {
      get(target, name) {
        assert.equal(name, 'ipcMain', 'the disabled updater only needs IPC')
        return target[name]
      }
    }
  )
  const updater = new Proxy(
    {},
    {
      get() {
        assert.fail('the disabled updater must not load electron-updater')
      }
    }
  )
  const { initAutoUpdater } = load('src/main/auto-updater.ts', {
    electron,
    'electron-updater': updater
  })
  initAutoUpdater()
  assert.deepEqual([...handlers.keys()], ['update:get-status', 'update:download', 'update:install'])
  for (const handler of handlers.values()) {
    assert.equal(await handler(), null)
    assert.equal(await handler(), null)
  }
})
