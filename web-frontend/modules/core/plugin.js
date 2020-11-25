import Vue from 'vue'

import { Registry } from '@baserow/modules/core/registry'

import { PasswordSettingsType } from '@baserow/modules/core/settingsTypes'

import applicationStore from '@baserow/modules/core/store/application'
import authStore from '@baserow/modules/core/store/auth'
import groupStore from '@baserow/modules/core/store/group'
import notificationStore from '@baserow/modules/core/store/notification'
import sidebarStore from '@baserow/modules/core/store/sidebar'

export default ({ store, app }, inject) => {
  inject('bus', new Vue())

  const registry = new Registry()
  registry.registerNamespace('plugin')
  registry.registerNamespace('application')
  registry.registerNamespace('view')
  registry.registerNamespace('field')
  registry.registerNamespace('settings')
  registry.register('settings', new PasswordSettingsType())
  inject('registry', registry)

  store.registerModule('application', applicationStore)
  store.registerModule('auth', authStore)
  store.registerModule('group', groupStore)
  store.registerModule('notification', notificationStore)
  store.registerModule('sidebar', sidebarStore)
}
